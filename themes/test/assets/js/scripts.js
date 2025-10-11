/**
 * Canvas LTI Iframe Integration Script
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
 * This block listens for theme changes that happen *after* the page has loaded.
 * The initial theme is set by a tiny script in the <head> to prevent a "flash".
 * This listener ensures the iframe stays in sync if the user toggles the theme
 * in the Canvas Mobile App or their OS settings.
 */
(() => {
  // Function to apply the theme attribute to the root <html> element.
  function applyTheme(isDarkMode) {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
  }

  // Create a media query object that checks for the 'prefers-color-scheme'.
  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Add a 'change' event listener. This is the crucial part.
  // It will fire whenever the preferred color scheme changes.
  colorSchemeQuery.addEventListener("change", (event) => {
    applyTheme(event.matches);
  });
})();

/*
 * =============================================================================
 * SECTION 1: Core Helpers & Configuration
 * =============================================================================
 */

// A consistent reference to the browser's user agent string for environment detection.
const UA = navigator.userAgent || "";

/**
 * Checks if the window is currently embedded inside an iframe.
 * This is the primary check to determine if the script should run its logic.
 * @returns {boolean} True if inside an iframe, false otherwise.
 */
function isEmbedded() {
  try {
    // The most reliable check is seeing if the parent window is different from the current window.
    return window.parent && window.parent !== window;
  } catch (e) {
    // If the above check fails due to cross-origin security policies, it's a strong indicator
    // that we are indeed in an iframe.
    return true;
  }
}

/**
 * Gets the correct window object to send a postMessage to, per Canvas guidance.
 * @returns {Window | null} The target window (parent or opener) or null if none.
 */
function getTargetWindow() {
  // If the tool was launched in a new tab or popup, it will have a window.opener.
  if (window.opener && !window.opener.closed) {
    return window.opener;
  }
  // For standard iframe embeds, the target is the parent window.
  if (window.parent && window.parent !== window) {
    return window.parent;
  }
  return null;
}

// Canvas can provide an optional security token in the launch URL. This code
// safely retrieves it if it exists, to be included in postMessage calls.
const POST_MESSAGE_TOKEN = new URLSearchParams(location.search).get(
  "post_message_token"
);

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

    // Schedule the height calculation and message sending to run right before the
    // next browser repaint. This is the most efficient way to handle UI updates.
    requestAnimationFrame(() => {
      // Reset the flag so the next request can be scheduled.
      rafPending = false;

      // Robustly calculate the document's full height. We check multiple properties
      // across both the documentElement and the body to get the most accurate
      // value across different browsers and rendering modes.
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

      // Construct the message object required by the Canvas postMessage API.
      const message = { subject: "lti.frameResize", height };
      // Include the security token if it was found in the URL.
      if (POST_MESSAGE_TOKEN) message.token = POST_MESSAGE_TOKEN;

      // Send the message to the parent Canvas window.
      const target = getTargetWindow();
      if (target) {
        // The '*' target origin is acceptable here as recommended by Canvas docs for this message.
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
 * Removes website navigation, headers, footers, and adjusts layout
 * to make the content appear native to the Canvas UI when embedded.
 */
function removeNavigationEmbed() {
  // This function should only ever run when embedded.
  if (!isEmbedded()) return;

  // Inject defensive embed styles to prevent horizontal overflow in parent Canvas.
  injectEmbedStyles();

  // Add a <base target="_top"> tag to the document's <head>. This ensures that
  // any link clicked within the iframe will open in the main browser window,
  // "breaking out" of the iframe and preventing the external site from being
  // trapped inside the small Canvas frame.
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
      el.style.overflow = "auto"; // Helps manage content flow within the adjusted container.
    }
  );
}

// New helper to append CSS when embedded so iframe content can't overflow parent.
function injectEmbedStyles() {
  if (document.getElementById("canvas-embed-defensive-styles")) return;
  const css = `
    /* Prevent horizontal overflow that creates parent scrollbars */
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      overflow-x: hidden !important;
      min-width: 0 !important;
      box-sizing: border-box !important;
    }
    *, *::before, *::after { box-sizing: inherit !important; }

    /* Make media flexible */
    img, picture, video, iframe, embed, object {
      max-width: 100% !important;
      height: auto !important;
      display: block;
    }

    /* Safeguard elements using 100vw */
    [style*="width:100vw"], [style*="width: 100vw"] {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
    }

    /* Ensure common containers don't force extra width */
    .container, .container-fluid, .container-xxl, .container-xl,
    .container-lg, .container-md, .container-sm {
      max-width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      min-width: 0 !important;
    }
  `;
  const style = document.createElement("style");
  style.id = "canvas-embed-defensive-styles";
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}

/*
 * =============================================================================
 * SECTION 4: Initialization and Event Listeners
 * =============================================================================
 */

// The main initialization logic. We need to run cleanup and resizing at the right moments.
if (document.readyState === "loading") {
  // If the script runs before the DOM is ready, wait for the DOMContentLoaded event.
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      if (isEmbedded()) {
        removeNavigationEmbed();
        sendIframeHeight(); // Send initial height after DOM is ready.
      }
    },
    { once: true }
  );
} else {
  // If the script runs after the DOM is ready, execute immediately.
  if (isEmbedded()) {
    removeNavigationEmbed();
    sendIframeHeight();
  }
}

// The 'load' event fires after all assets (images, fonts, etc.) have finished loading.
// A final resize call here catches any layout shifts caused by these late-loading assets.
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

// A ResizeObserver is the most efficient way to detect changes to the size of the
// document body, which can happen due to expanding accordions, dynamic content, etc.
const ro = new ResizeObserver(() => {
  if (isEmbedded()) {
    sendIframeHeight();
  }
});

// We need to make sure the body element exists before we can observe it.
if (document.body) {
  ro.observe(document.body);
} else {
  // If the body isn't ready yet, wait for DOMContentLoaded to attach the observer.
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
 * A simple check for mobile devices to apply specific styles if needed.
 */
function checkIfMobile() {
  if (/Mobi|Android/i.test(UA)) {
    // Example: On mobile, ensure the body can scroll if its content overflows.
    document.body.style.overflow = "visible";
  }
}

/**
 * Replaces embedded YouTube/Vimeo videos with clickable thumbnails before printing.
 * This saves ink/paper and prevents blank spaces on the printed page.
 * The original videos are restored after the print dialog is closed.
 */
function replaceVideosWithThumbnails() {
  const iframes = document.querySelectorAll(
    'iframe[src*="youtube.com"], iframe[src*="vimeo.com"]'
  );
  const originalIframes = [];

  iframes.forEach((iframe) => {
    originalIframes.push({ iframe, parent: iframe.parentNode });
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
        // Note: Getting a Vimeo thumbnail requires an API call. This is a placeholder.
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
