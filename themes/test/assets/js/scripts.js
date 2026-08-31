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
 * SECTION 0: Dynamic Theme Selection
 * =============================================================================
 *
 * Theme behavior:
 *
 * - Normal WhatMakeArt website:
 *     Follow the browser/device prefers-color-scheme.
 *
 * - Embedded in Canvas Web on a desktop/laptop:
 *     Force LIGHT mode so the embedded page matches the surrounding
 *     Canvas interface.
 *
 * - Embedded on a mobile/tablet device:
 *     Follow prefers-color-scheme. The Canvas mobile app WebView can expose
 *     its current light/dark appearance through this media query.
 *
 * The theme is checked:
 * - immediately
 * - whenever prefers-color-scheme changes
 * - when the page becomes visible again
 * - when the page is restored from browser/WebView navigation
 */
(() => {
  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  /**
   * Applies a Bootstrap light/dark theme.
   *
   * @param {boolean} isDarkMode
   */
  function applyTheme(isDarkMode) {
    const theme = isDarkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-bs-theme", theme);

    // Also tells the browser/WebView which native color scheme to use
    // for things such as form controls and scrollbars.
    document.documentElement.style.colorScheme = theme;
  }

  /**
   * Determines which theme should currently be displayed.
   */
  function syncTheme() {
    /*
     * Canvas Web on desktop/laptop is normally light even when the operating
     * system itself is using dark mode.
     *
     * Force the embedded page to light so we do not get a dark iframe
     * surrounded by a light Canvas page.
     */
    if (isEmbedded() && !isLikelyMobileDevice()) {
      applyTheme(false);
      return;
    }

    /*
     * Normal website viewing and mobile/tablet viewing follow the appearance
     * reported by the browser or Canvas mobile WebView.
     */
    applyTheme(colorSchemeQuery.matches);
  }

  // Apply the appropriate theme immediately.
  syncTheme();

  // Update when the browser/WebView appearance changes.
  colorSchemeQuery.addEventListener("change", syncTheme);

  // Mobile apps may suspend the WebView. Re-check when returning to it.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      syncTheme();
    }
  });

  // Re-check after browser/WebView navigation or cache restoration.
  window.addEventListener("pageshow", syncTheme);
})();

/**
 * =============================================================================
 * SECTION 1: Core Helpers & Canvas Mobile Detection
 * =============================================================================
 */

// A consistent reference to the browser's user agent string.
const UA = navigator.userAgent || "";

// How long to wait for Canvas Web to respond to our capability test.
const CANVAS_POSTMESSAGE_RESPONSE_TIMEOUT = 3000;

// Canvas postMessage capability state.
// null  = not yet determined
// true  = Canvas responded
// false = Canvas did not respond
let canvasPostMessageSupported = null;

// Prevent the capability test from running multiple times.
let canvasPostMessageProbeStarted = false;

// Store the timeout so it can be cancelled when Canvas responds.
let canvasPostMessageTimeout = null;

/**
 * Checks whether this page is inside an iframe.
 *
 * @returns {boolean}
 */
function isEmbedded() {
  return window.parent !== window;
}

/**
 * Positively identifies phones and tablets.
 *
 * Generic touchscreen detection is intentionally avoided because
 * touchscreen laptops must never be classified as Canvas mobile.
 */
function isLikelyMobileDevice() {
  const ua = navigator.userAgent || "";

  // Chromium provides this on supported browsers.
  if (navigator.userAgentData && navigator.userAgentData.mobile === true) {
    return true;
  }

  // iPhone / traditional iPad / iPod.
  const isiOS = /iPhone|iPad|iPod/i.test(ua);

  // Modern iPads can identify themselves as Macintosh.
  const isiPadDesktopUA =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;

  // Android phones and tablets.
  const isAndroid = /Android/i.test(ua);

  // Other explicitly mobile browsers.
  const hasMobileUA = /Mobi|Mobile/i.test(ua);

  return isiOS || isiPadDesktopUA || isAndroid || hasMobileUA;
}

/**
 * Gets the correct window to receive Canvas postMessage calls.
 *
 * Current Canvas guidance:
 * - iframe = window.parent
 * - separate tab/window/popup = window.opener
 *
 * @returns {Window | null}
 */
function getTargetWindow() {
  if (isEmbedded()) {
    return window.parent;
  }

  if (window.opener && !window.opener.closed) {
    return window.opener;
  }

  return null;
}

/**
 * =============================================================================
 * Canvas postMessage Response Detection
 * =============================================================================
 *
 * Canvas Web can respond to:
 *
 *     lti.fetchWindowSize
 *
 * Canvas mobile apps currently do not return Canvas LTI postMessage
 * responses.
 *
 * We therefore combine TWO tests:
 *
 *     mobile/tablet device
 *              +
 *     Canvas postMessage does not respond
 *
 * This avoids falsely identifying a desktop Canvas page as the mobile app
 * simply because a particular Canvas embed does not answer the request.
 */

/**
 * Handles Canvas postMessage responses.
 */
function handleCanvasPostMessage(event) {
  if (!isEmbedded()) return;
  // not needed if classes are added in the head
  //document.documentElement.classList.add("canvas-embedded");
  //document.body.classList.add("canvas-embedded");

  // Only trust messages from the iframe's immediate parent.
  if (event.source !== window.parent) return;

  const data = event.data;

  if (!data || typeof data !== "object") return;

  if (data.subject === "lti.fetchWindowSize.response") {
    canvasPostMessageSupported = true;

    // Cancel the pending "mobile app" timeout.
    if (canvasPostMessageTimeout !== null) {
      clearTimeout(canvasPostMessageTimeout);
      canvasPostMessageTimeout = null;
    }

    // Canvas responded, so this should not display the mobile-app warning.
    hideCanvasMobileFallback();
  }
}

// Install the listener before sending our test message.
window.addEventListener("message", handleCanvasPostMessage);

/**
 * Tests whether the current embedded environment behaves like the
 * Canvas mobile app.
 *
 * Warning is shown ONLY when:
 *
 * 1. The page is embedded.
 * 2. The device appears to be a phone/tablet.
 * 3. Canvas does not respond to lti.fetchWindowSize.
 */
function detectCanvasPostMessageSupport() {
  if (!isEmbedded()) return;

  /*
   * Only run the test on pages where Hugo has actually rendered the
   * optional mobile fallback warning.
   */
  if (!document.querySelector("[data-canvas-mobile-fallback]")) {
    return;
  }

  // Only test once per page load.
  if (canvasPostMessageProbeStarted) return;

  canvasPostMessageProbeStarted = true;

  /*
   * If this is clearly not a mobile/tablet device, don't even perform
   * mobile-app detection.
   *
   * This prevents desktop Canvas from ever showing the warning.
   */
  if (!isLikelyMobileDevice()) {
    hideCanvasMobileFallback();
    return;
  }

  const target = getTargetWindow();

  if (!target) return;

  /*
   * Ask Canvas for the containing window size.
   *
   * Canvas Web supports this request.
   * Canvas mobile apps currently do not respond to it.
   */
  target.postMessage(
    {
      subject: "lti.fetchWindowSize",
    },
    "*"
  );

  /*
   * Wait briefly for Canvas Web to answer.
   *
   * No response + mobile/tablet + iframe =
   * likely Canvas mobile app.
   */
  canvasPostMessageTimeout = window.setTimeout(() => {
    if (canvasPostMessageSupported === true) {
      hideCanvasMobileFallback();
      return;
    }

    // Check again immediately before showing anything.
    if (!isEmbedded() || !isLikelyMobileDevice()) {
      hideCanvasMobileFallback();
      return;
    }

    canvasPostMessageSupported = false;
    showCanvasMobileFallback();
  }, CANVAS_POSTMESSAGE_RESPONSE_TIMEOUT);
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

/*
 * =============================================================================
 * SECTION 3: DOM Manipulation for Seamless Embedding
 * =============================================================================
 */

/**
 * Shows the Canvas mobile fallback.
 *
 * Final safety check prevents this from ever being shown
 * on a desktop/laptop even if this function is called accidentally.
 */
function showCanvasMobileFallback() {
  if (!isEmbedded() || !isLikelyMobileDevice()) {
    hideCanvasMobileFallback();
    return;
  }

  document.documentElement.classList.add("canvas-mobile-fallback-active");

  document
    .querySelectorAll("[data-canvas-mobile-fallback]")
    .forEach((fallback) => {
      fallback.hidden = false;
    });
}

/**
 * Hides the Canvas mobile fallback.
 */
function hideCanvasMobileFallback() {
  document.documentElement.classList.remove("canvas-mobile-fallback-active");

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
      ".container, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm"
    )
    .forEach((el) => {
      //el.style.paddingLeft = "0";
      //el.style.paddingRight = "0";
      //el.style.marginLeft = "0";
      //el.style.marginRight = "0";
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
