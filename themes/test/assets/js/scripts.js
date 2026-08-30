/**
 * Canvas LTI Iframe Integration Script orig
 *
 * This script handles the necessary adjustments for a webpage to be seamlessly
 * embedded as an LTI tool within the Canvas LMS. Its primary functions are:
 * 1. Removing extraneous navigation/UI elements from the page when in an iframe.
 * 2. Accurately measuring the page's height and communicating it to Canvas
 * to eliminate double scrollbars.
 * 3. Handling other integrations like mobile detection and print-friendly media.
 *
 * It is intended to be loaded at the end of the <body> for optimal performance.
 */

/**
 * =============================================================================
 * SECTION 0: Dynamic Theme Change Listener
 * =============================================================================
 * Keeps the embedded page synchronized with the light/dark appearance exposed
 * by the browser or Canvas mobile app WebView.
 *
 * Canvas mobile apps do not currently support the Canvas LTI postMessage API,
 * so prefers-color-scheme is used instead of asking Canvas for its theme.
 */
(() => {
  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  /**
   * Applies the current light/dark preference to Bootstrap.
   */
  function applyTheme(isDarkMode) {
    const theme = isDarkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-bs-theme", theme);

    // Also expose the standard CSS color-scheme hint so native form controls,
    // scrollbars, etc. can follow the selected appearance where supported.
    document.documentElement.style.colorScheme = theme;
  }

  /**
   * Reads and applies the current appearance.
   */
  function syncTheme() {
    applyTheme(colorSchemeQuery.matches);
  }

  // Apply immediately.
  syncTheme();

  // Update if the WebView/browser reports a theme change while this page
  // remains open.
  colorSchemeQuery.addEventListener("change", syncTheme);

  // Mobile apps may suspend the WebView while another screen is displayed.
  // Re-check when the page becomes visible again.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      syncTheme();
    }
  });

  // Also catch WebView navigation/cache restoration.
  window.addEventListener("pageshow", syncTheme);
})();

/*
 * =============================================================================
 * SECTION 1: Core Helpers & Configuration
 * =============================================================================
 */

// A consistent reference to the browser's user agent string for environment detection.
const UA = navigator.userAgent || "";

// How long to wait for Canvas Web to respond before assuming that the
// Canvas postMessage API is unavailable.
//
// Canvas mobile apps currently do not respond to these messages.
// A late response will still hide the fallback if Canvas eventually replies.
const CANVAS_POSTMESSAGE_RESPONSE_TIMEOUT = 2000;

// Tracks the state of the Canvas postMessage capability test.
// null  = not yet determined
// true  = Canvas responded
// false = no response within the timeout
let canvasPostMessageSupported = null;

// Prevent the capability test from being started multiple times.
let canvasPostMessageProbeStarted = false;

// Store the timeout so it can be cancelled if Canvas responds.
let canvasPostMessageTimeout = null;

/**
 * Checks if the window is currently embedded inside an iframe.
 * This is the primary check to determine if the script should run its
 * Canvas/embed logic.
 *
 * When a page is not embedded, window.parent points to the window itself.
 *
 * @returns {boolean} True if inside an iframe, false otherwise.
 */
function isEmbedded() {
  return window.parent !== window;
}

/**
 * Gets the correct window object to send a postMessage to, per current
 * Canvas guidance.
 *
 * Canvas now recommends sending iframe messages to the immediate parent
 * rather than window.top. If launched in a separate tab/window/popup,
 * window.opener can be used instead.
 *
 * @returns {Window | null} The parent or opener window, or null if none.
 */
function getTargetWindow() {
  // For standard iframe embeds, the target is the immediate parent window.
  if (isEmbedded()) {
    return window.parent;
  }

  // If the tool was launched in a new tab or popup, use its opener.
  if (window.opener && !window.opener.closed) {
    return window.opener;
  }

  return null;
}

/*
 * =============================================================================
 * SECTION 2: Iframe Resizing Logic
 * =============================================================================
 */

/**
 * A high-performance function to send the iframe's height to Canvas.
 * It is "throttled" using requestAnimationFrame to prevent sending too many
 * messages and causing performance issues during rapid content changes.
 */
const sendIframeHeight = (() => {
  // A private flag to track if a resize message is already scheduled for the next frame.
  let rafPending = false;

  return function sendIframeHeight() {
    // Do nothing if the page is not embedded.
    if (!isEmbedded()) return;

    // If a resize message is already in the queue, skip this request.
    if (rafPending) return;
    rafPending = true;

    // Schedule the height calculation and message sending to run right before the next browser repaint.
    requestAnimationFrame(() => {
      // Reset the flag so the next request can be scheduled.
      rafPending = false;

      // Robustly calculate the document's full height. We check multiple
      // properties across both the documentElement and body to get the most
      // accurate value across different browsers and rendering modes.
      const de = document.documentElement;
      const b = document.body || {};

      const height = Math.max(
        de.scrollHeight,
        de.offsetHeight,
        de.clientHeight,
        b.scrollHeight || 0,
        b.offsetHeight || 0,
        b.clientHeight || 0
      );

      // Construct the message required by the Canvas postMessage API.
      const message = {
        subject: "lti.frameResize",
        height,
      };

      // Current Canvas guidance is to send iframe messages to the immediate
      // parent window rather than window.top.
      const target = getTargetWindow();

      if (target) {
        // Canvas documents "*" as the target origin for lti.frameResize.
        target.postMessage(message, "*");
      }
    });
  };
})();

/**
 * Handles responses from Canvas.
 *
 * We specifically listen for lti.fetchWindowSize.response because Canvas Web
 * supports this request while Canvas mobile apps currently do not return
 * postMessage responses.
 */
function handleCanvasPostMessage(event) {
  // This capability test only matters while embedded.
  if (!isEmbedded()) return;

  // Only accept the response from our immediate embedding parent.
  if (event.source !== window.parent) return;

  const data = event.data;

  // Ignore messages that are not object-based Canvas messages.
  if (!data || typeof data !== "object") return;

  if (data.subject === "lti.fetchWindowSize.response") {
    canvasPostMessageSupported = true;

    // Canvas responded, so cancel the mobile/unsupported fallback timeout.
    if (canvasPostMessageTimeout !== null) {
      clearTimeout(canvasPostMessageTimeout);
      canvasPostMessageTimeout = null;
    }

    // If the fallback was briefly displayed because Canvas responded late,
    // hide it again.
    hideCanvasMobileFallback();
  }
}

// The listener must exist before the capability probe is sent.
window.addEventListener("message", handleCanvasPostMessage);

/**
 * Tests whether the embedding Canvas environment supports Canvas postMessage.
 *
 * Canvas Web should respond to lti.fetchWindowSize.
 * Canvas mobile apps currently do not return response messages.
 *
 * IMPORTANT:
 * A lack of response proves that Canvas postMessage is unavailable; it does
 * not absolutely prove that the page is inside a Canvas mobile app. Another
 * iframe host that does not implement the Canvas API would behave the same way.
 *
 * For pages that are normally embedded only by Canvas, this is a useful and
 * much more reliable proxy than user-agent detection.
 */
function detectCanvasPostMessageSupport() {
  if (!isEmbedded()) return;

  // Do not run this test on pages that do not contain the optional fallback UI.
  if (!document.querySelector("[data-canvas-mobile-fallback]")) return;

  // Only start one capability test per page load.
  if (canvasPostMessageProbeStarted) return;
  canvasPostMessageProbeStarted = true;

  const target = getTargetWindow();
  if (!target) return;

  // Ask Canvas for information that Canvas Web is documented to return.
  target.postMessage(
    {
      subject: "lti.fetchWindowSize",
    },
    "*"
  );

  // If no response arrives, assume Canvas postMessage is unavailable.
  canvasPostMessageTimeout = window.setTimeout(() => {
    if (canvasPostMessageSupported === true) return;

    canvasPostMessageSupported = false;

    // This is the condition expected in the Canvas mobile apps.
    showCanvasMobileFallback();
  }, CANVAS_POSTMESSAGE_RESPONSE_TIMEOUT);
}

/*
 * =============================================================================
 * SECTION 3: DOM Manipulation for Seamless Embedding
 * =============================================================================
 */

/**
 * Reveals the optional fallback message intended for Canvas mobile /
 * unsupported postMessage environments.
 *
 * Link destination priority:
 * 1. Explicit data-canvas-url generated from canvas_url frontmatter.
 * 2. A likely Canvas parent page found through document.referrer.
 * 3. The link's existing href, normally the Hugo .Permalink to this page.
 */
function showCanvasMobileFallback() {
  const canvasReferrerUrl = null;

  document
    .querySelectorAll("[data-canvas-mobile-fallback]")
    .forEach((fallback) => {
      const link = fallback.querySelector("[data-canvas-mobile-fallback-link]");

      if (link) {
        // If Hugo supplied canvas_url in frontmatter, it is the most reliable
        // destination and should not be replaced.
        const explicitCanvasUrl = link.dataset.canvasUrl;

        if (explicitCanvasUrl) {
          link.href = explicitCanvasUrl;
        } else if (canvasReferrerUrl) {
          // Otherwise use the Canvas parent/referrer when it looks useful.
          link.href = canvasReferrerUrl;
        }

        // If neither is available, the original href remains intact.
        // The Hugo template should set that href to the page's .Permalink.
      }

      fallback.hidden = false;
    });
}

/**
 * Hides the Canvas mobile fallback.
 *
 * This normally remains hidden from initial page render, but this function
 * also handles the unlikely case where Canvas responds after the timeout.
 */
function hideCanvasMobileFallback() {
  document
    .querySelectorAll("[data-canvas-mobile-fallback]")
    .forEach((fallback) => {
      fallback.hidden = true;
    });
}

/**
 * Removes website navigation, headers, footers, and adjusts layout
 * to make the content appear native to the Canvas UI when embedded.
 */
function removeNavigationEmbed() {
  // This function should only ever run when embedded.
  if (!isEmbedded()) return;

  // Add a <base target="_top"> tag to the document's <head>. This ensures that
  // ordinary links clicked within the iframe open in the top-level browsing
  // context rather than remaining trapped inside the small Canvas frame.

  // This check makes the operation "idempotent" (safe to run multiple times).
  if (!document.querySelector('base[target="_top"]')) {
    const base = document.createElement("base");
    base.target = "_top";
    document.head.appendChild(base);
  }

  // A list of element IDs to completely remove from the page.
  const idsToRemove = [
    "wiki-navbar",
    "course-sidebar",
    "wiki-sidebar",
    "course-page-intro",
    "wiki-page-intro",
    "course-toc",
    "wiki-toc",
    "backlinks-container",
    "header",
    "footer",
    "pageTitleH1",
    "top-prev-next",
    "bottom-prev-next",
    "breadcrumbs",
    "topTOC",
  ];

  idsToRemove.forEach((id) => document.getElementById(id)?.remove()); // The `?` safely handles cases where an ID doesn't exist.

  // Remove padding from common Bootstrap container classes to allow content to span the full iframe width.
  document
    .querySelectorAll(
      ".container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm"
    )
    .forEach((el) => {
      el.style.padding = "0";
    });

  // Adjust the main content areas to ensure they are full-width.
  ["wiki-content", "course-content", "course-main", "wiki-main"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (!el) return;

      el.classList.add("container-fluid", "keep-wide-canvas-lms");
      el.classList.remove("bd-content", "ps-lg-2", "bd-main");
      el.style.overflow = "auto";
      el.style.overflowX = "hidden";
    }
  );
}

/*
 * =============================================================================
 * SECTION 4: Initialization and Event Listeners
 * =============================================================================
 */

// The main initialization logic. We need to run cleanup, resizing, and the
// Canvas postMessage capability test at the right moments.
if (document.readyState === "loading") {
  // If the script runs before the DOM is ready, wait for DOMContentLoaded.
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      if (isEmbedded()) {
        removeNavigationEmbed();

        // Send the initial height after the DOM is ready.
        sendIframeHeight();

        // Determine whether Canvas Web is responding to postMessage.
        // The optional mobile fallback will only be shown if no response arrives.
        detectCanvasPostMessageSupport();
      }
    },
    { once: true }
  );
} else {
  // If the script runs after the DOM is ready, execute immediately.
  if (isEmbedded()) {
    removeNavigationEmbed();
    // Send the initial height after the DOM is ready.
    sendIframeHeight();
    // Determine whether Canvas Web is responding to postMessage.
    // The optional mobile fallback will only be shown if no response arrives.
    detectCanvasPostMessageSupport();
  }
}

// The 'load' event fires after all assets (images, fonts, etc.) have finished
// loading. A final resize call here catches layout shifts caused by these
// late-loading assets.
window.addEventListener(
  "load",
  () => {
    checkIfMobile();

    if (isEmbedded()) {
      sendIframeHeight();
    }
  },
  { once: true }
);

// A ResizeObserver is the most efficient way to detect changes to the size of
// the document body, which can happen due to expanding accordions, dynamic
// content, revealing the Canvas mobile fallback, etc.
const ro = new ResizeObserver(() => {
  if (isEmbedded()) {
    sendIframeHeight();
  }
});

// We need to make sure the body element exists before we can observe it.
if (document.body) {
  ro.observe(document.body);
} else {
  // If the body isn't ready yet, wait for DOMContentLoaded to attach observer.
  document.addEventListener(
    "DOMContentLoaded",
    () => ro.observe(document.body),
    { once: true }
  );
}

/*
 * =============================================================================
 * SECTION 5: Miscellaneous Utility Functions
 * =============================================================================
 */

/**
 * A simple check for mobile browsers to apply specific styles if needed.
 *
 * NOTE:
 * This is general mobile-browser detection and is NOT used to determine
 * whether the page is running inside the Canvas mobile app.
 */
function checkIfMobile() {
  if (/Mobi|Android/i.test(UA)) {
    // On mobile, ensure the body can scroll if its content overflows.
    document.body.style.overflow = "visible";
  }
}

/**
 * Replaces embedded YouTube/Vimeo videos with clickable thumbnails before
 * printing. This saves ink/paper and prevents blank spaces on the printed page.
 * The original videos are restored after the print dialog is closed.
 */
function replaceVideosWithThumbnails() {
  const iframes = document.querySelectorAll(
    'iframe[src*="youtube.com"], iframe[src*="vimeo.com"]'
  );

  const originalIframes = [];

  iframes.forEach((iframe) => {
    originalIframes.push({
      iframe,
      parent: iframe.parentNode,
    });

    const src = iframe.src;
    let thumbnailUrl, videoPageUrl;

    if (src.includes("youtube.com")) {
      const videoIdMatch = src.match(/(?:embed\/|v=)([\w-]{11})/);

      if (videoIdMatch) {
        const videoId = videoIdMatch[1];

        thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
        videoPageUrl = `https://www.youtube.com/watch?v=${videoId}`;
      }
    } else if (src.includes("vimeo.com")) {
      const videoIdMatch = src.match(/video\/(\d+)/);

      if (videoIdMatch) {
        const videoId = videoIdMatch[1];

        // Note: Getting a Vimeo thumbnail requires an API call.
        // This remains a placeholder from the original implementation.
        thumbnailUrl = "path_to_vimeo_thumbnail_placeholder.jpg";
        videoPageUrl = `https://vimeo.com/${videoId}`;
      }
    }

    if (thumbnailUrl && videoPageUrl) {
      const anchor = document.createElement("a");
      anchor.href = videoPageUrl;
      anchor.target = "_blank";

      const img = document.createElement("img");
      img.src = thumbnailUrl;
      img.style.width = "100%";
      img.style.cursor = "pointer";

      anchor.appendChild(img);
      iframe.parentNode.replaceChild(anchor, iframe);
    }
  });

  // After printing, restore the original iframes.
  window.onafterprint = () => {
    originalIframes.forEach((item) => {
      // Find the anchor tag that replaced the iframe and swap it back.
      const currentElement = item.parent.querySelector("a");

      if (currentElement) {
        item.parent.replaceChild(item.iframe, currentElement);
      }
    });
  };
}

// Attaches the print-handling function to the browser's beforeprint event.
window.onbeforeprint = replaceVideosWithThumbnails;
