document.addEventListener("DOMContentLoaded", initializePage);

function initializePage() {
  console.log(
    isPageLoaded()
      ? "Page already loaded"
      : "Page loaded after DOMContentLoaded"
  );
  if (isIframe()) {
    adjustStylesForIframe();
    setupIframeHeightCommunication();
  }
  window.addEventListener("load", onWindowLoad);
}

function isPageLoaded() {
  return document.readyState !== "loading";
}

function isIframe() {
  return self !== top;
}

function adjustStylesForIframe() {
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
  elementsToRemove.forEach(removeElementById);

  adjustContainerFluidPadding();
  adjustMainContentClasses();
  addBaseTarget();
}

function removeElementById(id) {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}

function adjustContainerFluidPadding() {
  const containerClasses = [
    ".container",
    ".container-fluid",
    ".container-xxl",
    ".container-xl",
    ".container-lg",
    ".container-md",
    ".container-sm",
  ];
  containerClasses.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.style.padding = 0;
    });
  });
}

function adjustMainContentClasses() {
  const mainContentIds = [
    "wiki-content",
    "course-content",
    "course-main",
    "wiki-main",
  ];
  mainContentIds.forEach((id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.classList.add("containerfluid", "keep-wide-canvas-lms");
      elem.classList.remove("bd-content", "ps-lg-2");
      elem.style.overflowX = "auto";
      elem.style.overflowY = "auto";
    }
  });
}

function addBaseTarget() {
  if (document.head) {
    let base = document.createElement("base");
    base.target = "_top";
    document.head.appendChild(base);
  }
}

function onWindowLoad() {
  console.log("Page content is fully loaded");
  checkIfMobile();
}

function checkIfMobile() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    console.log("Browser is mobile");
    document.body.style.overflow = "visible";
  } else {
    console.log("Browser is not mobile");
  }
}

function setupIframeHeightCommunication() {
  sendIframeHeight();
  setupResizeObserver();
  setupIntervalForIframeHeight();
}

function sendIframeHeight() {
  const message = JSON.stringify({
    subject: "lti.frameResize",
    height: document.documentElement.scrollHeight,
  });
  const targetOrigin = "https://cia.instructure.com/";

  if (window.opener) {
    window.opener.postMessage(message, targetOrigin);
  } else if (window.parent) {
    window.parent.postMessage(message, targetOrigin);
  } else if (window.top) {
    window.top.postMessage(message, targetOrigin);
  } else {
    console.log("This window is not a popup, top, or parent");
  }

  console.log(
    "iframe scrollHeight: " + document.documentElement.scrollHeight + "px"
  );
}

function setupResizeObserver() {
  const resizeObserver = new ResizeObserver(() => {
    console.log("Element resized");
    sendIframeHeight();
  });
  resizeObserver.observe(document.body);
}

function setupIntervalForIframeHeight() {
  setIntervalX(() => sendIframeHeight(), 10, 9);
}

function setIntervalX(callback, delay, repetitions) {
  let x = 0;
  const intervalID = window.setInterval(() => {
    callback();
    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}
