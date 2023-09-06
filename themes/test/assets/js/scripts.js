if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded after checking readyState");
    if (self != top) {
      removeNavigationEmbed();
      sendIframeHeight();
      var referrer = document.referrer;
      console.log(referrer);
    }
  });
} else {
  // `DOMContentLoaded` has already fired which sometimes happens so run the functions
  console.log("DOMContentLoaded has already fired before addEventListener");
  if (self != top) {
    removeNavigationEmbed();
    sendIframeHeight();
  }
}

window.addEventListener("load", function (event) {
  console.log("Page content is fully loaded");
  checkIfMobile();
  if (self != top) {
    // This will be repeated 9 times with .01 second intervals:
    // delay is first param and number of times is secton
    setIntervalX(
      function () {
        // Your logic here
        sendIframeHeight();
      },
      10,
      9
    );
  }
  //monitorMutations();
});

// sends postMessage to top / opener / parent page with hight information
function sendIframeHeight() {
  if (window.opener != null && typeof window.opener != "undefined") {
    console.log("This window is pop up.");

    window.opener.postMessage(
      JSON.stringify({
        subject: "lti.frameResize",
        height: document.documentElement.scrollHeight,
      }),
      "https://cia.instructure.com/"
    );

    console.log(
      "iframe scrollHeight: " + document.documentElement.scrollHeight + "px"
    );
  } else if (window.top != null && typeof window.top != "undefined") {
    console.log("This window is the top");

    window.top.postMessage(
      JSON.stringify({
        subject: "lti.frameResize",
        height: document.documentElement.scrollHeight,
      }),
      "https://cia.instructure.com/"
    );

    console.log(
      "iframe scrollHeight: " + document.documentElement.scrollHeight + "px"
    );
  } else if (window.parent != null && typeof window.parent != "undefined") {
    console.log("This window is the parent");

    window.parent.postMessage(
      JSON.stringify({
        subject: "lti.frameResize",
        height: document.documentElement.scrollHeight,
      }),
      "https://cia.instructure.com/"
    );

    console.log(
      "iframe scrollHeight: " + document.documentElement.scrollHeight + "px"
    );
  } else {
    console.log("This window is not a pop up, top or parent");
  }
}

// removes navigation elements when embedded in an LMS so only the page content is seen but allows course site to work on open web
function removeNavigationEmbed() {
  if (self != top) {
    //make links open in _blank if page is an embedded iframe
    let baseToAdd = document.createElement("base");
    baseToAdd.target = "_top";
    document.head.appendChild(baseToAdd);

    const elements = [
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

    for (element of elements) {
      DOMElement = document.getElementById(element);
      if (DOMElement) {
        DOMElement.remove();
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

    for (bdClass of bdClasses) {
      const elements = document.querySelectorAll(bdClass);
      elements.forEach(function (element) {
        element.style.padding = 0; // Bootstrap has left and right padding that doesn't let the iframe content expand fully
      });
    }

    // Remove and replace main content classes so content is full width in iframe
    // To do: Make into a function with a list or array
    // make more streamlined

    console.log("replace wiki-content");

    var elem = document.getElementById("wiki-content");
    if (elem !== null) {
      elem.classList.add("containerfluid");
      elem.classList.add("keep-wide-canvas-lms ");
      elem.classList.remove("bd-content");
      elem.classList.remove("ps-lg-2");
      console.log("Remove iframe Scroll");
      elem.style.overflowX = "auto"; // to remove iframe scrollbars when scrolling - needs to be done to iframe parent container on embedded page
      elem.style.overflowY = "auto"; // to remove iframe scrollbars when scrolling - needs to be done to iframe parent container on embedded page
    }

    console.log("replace course-content");

    var elem = document.getElementById("course-content");
    if (elem !== null) {
      elem.classList.add("containerfluid");
      elem.classList.add("keep-wide-canvas-lms");
      elem.classList.remove("bd-content");
      elem.classList.remove("ps-lg-2");
      console.log("Remove iframe Scroll");
      elem.style.overflowX = "auto"; // to remove iframe scrollbars when scrolling - needs to be done to iframe parent container on embedded page
      elem.style.overflowY = "auto"; // to remove iframe scrollbars when scrolling - needs to be done to iframe parent container on embedded page
    }

    // for bd-main - make into list

    console.log("replace courses-main");
    var elem = document.getElementById("course-main");
    if (elem !== null) {
      elem.classList.add("containerfluid");
      elem.classList.add("keep-wide-canvas-lms");
      elem.classList.remove("bd-main");
      console.log("Remove iframe Scroll");
      elem.style.overflowX = "auto"; // to remove iframe scrollbars when scrolling - needs to be done to iframe parent container on embedded page
      elem.style.overflowY = "auto"; // to remove iframe scrollbars when scrolling - needs to be done to iframe parent container on embedded page
    }

    console.log("replace wiki-main");
    var elem = document.getElementById("wiki-main");
    if (elem !== null) {
      elem.classList.add("containerfluid");
      elem.classList.add("keep-wide-canvas-lms");
      elem.classList.remove("bd-main");
      console.log("Remove iframe Scroll");
      elem.style.overflowX = "auto"; // to remove iframe scrollbars when scrolling - needs to be done to iframe parent container on embedded page
      elem.style.overflowY = "auto"; // to remove iframe scrollbars when scrolling - needs to be done to iframe parent container on embedded page
    }

    console.log("Removed iframe #header and #footer");

    changeStyle(); // remove Bootstrap Styles
  }
  if (self === top) {
    console.log("Top level website so keep native navigation");
  }
}

let resizeObserver = new ResizeObserver(() => {
  console.log("The element was resized");
  if (self != top) {
    sendIframeHeight();
  }
});

resizeObserver.observe(document.querySelector(".container-fluid"));

function checkIfMobile() {
  // mobile device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    console.log("Browser is mobile");
    document.body.style.overflow = "visible";
  } else {
    console.log("Browser is not mobile");
  }
}

function monitorMutations() {
  // monitor self-initiated changes in size
  var mo = new MutationObserver(function () {
    sendIframeHeight();
    console.log("mutation detected");
  });
  mo.observe(document, { subtree: true, childList: true, characterData: true });
}

// remove Boostrap Styles
function changeStyle() {
  const elements = document.querySelectorAll(".container-fluid");
  elements.forEach(function (element) {
    element.style.padding = 0; // Bootstrap has left and right padding that doesn't let the iframe content expand fully
  });
}

// used to repeat code a certain ammount of times with a delay
function setIntervalX(callback, delay, repetitions) {
  var x = 0;
  var intervalID = window.setInterval(function () {
    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}

/*

// Set theme to the user's preferred color scheme dark or light mode
function updateTheme() {
  const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  document.querySelector("html").setAttribute("data-bs-theme", colorMode);
}

// Set theme on load
updateTheme();

// Update theme when the preferred scheme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateTheme);
*/
