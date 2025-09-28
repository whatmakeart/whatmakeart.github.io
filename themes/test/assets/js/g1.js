/**
 * Theme Management for Canvas Environments
 * - Canvas Web (iframe): Forces 'light' theme.
 * - Canvas Mobile App & Standalone Web: Honors user's preference (localStorage or OS setting).
 */
(function () {
  // --- Environment detection helpers ---
  const ua = navigator.userAgent || "";
  const isIframe = (() => {
    try {
      return window.self !== window.top;
    } catch {
      return true;
    }
  })();
  const isCanvasReferrer = /(^|:\/\/)([^/]*\.)?instructure\.com/i.test(
    document.referrer || ""
  );

  // Heuristic for Canvas native mobile apps (WebView user agent)
  const isCanvasMobileApp =
    /Canvas/i.test(ua) ||
    (/(iPhone|iPad|Android)/i.test(ua) && /\b(wv|WebView)\b/i.test(ua));

  // Determine the environment
  const env =
    isIframe && isCanvasReferrer && !isCanvasMobileApp
      ? "canvas-web"
      : isIframe && isCanvasReferrer && isCanvasMobileApp
      ? "canvas-mobile"
      : "web";

  // --- Theme application helpers ---
  function getUserPreferredTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(mode) {
    document.documentElement.setAttribute("data-bs-theme", mode);
  }

  // --- Main logic ---
  if (env === "canvas-web") {
    // Canvas website (iframe, not mobile app): always force light theme.
    applyTheme("light");
  } else {
    // Standalone web OR Canvas mobile app: honor user/OS preference.
    const preferredTheme = getUserPreferredTheme();
    applyTheme(preferredTheme);

    // Listener to sync with OS changes if no theme is explicitly saved
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const syncWithOS = (e) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", syncWithOS);
  }
})();

// --- Existing Iframe and Page Management Logic ---

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", function () {
    if (self !== top) {
      removeNavigationEmbed();
      sendIframeHeight();
    }
  });
} else {
  // `DOMContentLoaded` has already fired
  if (self !== top) {
    removeNavigationEmbed();
    sendIframeHeight();
  }
}

window.addEventListener("load", function (event) {
  checkIfMobile();
  // The initial height is sent on DOMContentLoaded, and ResizeObserver handles the rest.
  // The repetitive setIntervalX is no longer needed.
});

/**
 * Sends postMessage to the parent window (Canvas) with height information.
 * This version is updated to match modern Canvas postMessage API documentation.
 */
function sendIframeHeight() {
  const height = document.documentElement.scrollHeight;
  const message = {
    subject: "lti.frameResize",
    height: height,
  };

  // Per Canvas docs, target window.parent for iframes or window.opener for popups.
  const target = window.opener || window.parent;

  if (target && target !== window.self) {
    // The target origin '*' is recommended in the Canvas documentation examples for this message.
    target.postMessage(message, "*");
    console.log(`Sent lti.frameResize with height: ${height}px`);
  }
}

// removes navigation elements when embedded in an LMS
function removeNavigationEmbed() {
  if (self != top) {
    //make links open in _top if page is an embedded iframe
    let baseToAdd = document.createElement("base");
    baseToAdd.target = "_top";
    document.head.appendChild(baseToAdd);

    const elementsToRemove = [
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

    for (const id of elementsToRemove) {
      const element = document.getElementById(id);
      if (element) {
        element.remove();
      }
    }

    const bdClasses = [
      ".container",
      ".container-fluid",
      ".container-xxl",
      ".container-xl",
      ".container-lg",
      ".container-md",
      ".container-sm",
    ];

    for (const bdClass of bdClasses) {
      const elements = document.querySelectorAll(bdClass);
      elements.forEach(function (element) {
        element.style.padding = 0;
      });
    }

    // Standardize content area adjustments
    const contentIds = [
      "wiki-content",
      "course-content",
      "course-main",
      "wiki-main",
    ];
    contentIds.forEach((id) => {
      const elem = document.getElementById(id);
      if (elem) {
        elem.classList.add("container-fluid", "keep-wide-canvas-lms");
        elem.classList.remove("bd-content", "ps-lg-2", "bd-main");
        elem.style.overflow = "auto";
      }
    });

    console.log("Removed navigation elements for iframe view.");
  }
}

// Use a ResizeObserver to efficiently send height updates when content changes size.
const resizeObserver = new ResizeObserver(() => {
  console.log("Content resized, sending new height.");
  if (self != top) {
    sendIframeHeight();
  }
});

resizeObserver.observe(document.body);

function checkIfMobile() {
  // A simplified check is often sufficient
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    console.log("Browser is mobile");
    document.body.style.overflow = "visible";
  } else {
    console.log("Browser is not mobile");
  }
}

// This function is kept for legacy purposes but is no longer called by default.
function setIntervalX(callback, delay, repetitions) {
  let x = 0;
  const intervalID = window.setInterval(function () {
    callback();
    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}

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
        // Vimeo thumbnail requires an API call, this is a placeholder
        thumbnailUrl = "path_to_vimeo_thumbnail_placeholder.jpg";
        videoPageUrl = `https://vimeo.com/${videoId}`;
      }
    }

    if (thumbnailUrl && videoPageUrl) {
      const anchor = document.createElement("a");
      anchor.href = videoPageUrl;
      anchor.target = "_blank"; // Open in new tab
      const img = document.createElement("img");
      img.src = thumbnailUrl;
      img.style.width = "100%"; // Make thumbnail responsive
      img.style.cursor = "pointer";
      anchor.appendChild(img);
      iframe.parentNode.replaceChild(anchor, iframe);
    }
  });

  window.onafterprint = () => {
    originalIframes.forEach((item) => {
      const currentElement = item.parent.querySelector("a");
      if (currentElement) {
        item.parent.replaceChild(item.iframe, currentElement);
      }
    });
  };
}

window.onbeforeprint = replaceVideosWithThumbnails;
