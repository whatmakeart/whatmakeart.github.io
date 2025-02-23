document.addEventListener("DOMContentLoaded", function () {
  // ... (getYoutubeVideoID and getVimeoVideoID functions - same as before) ...
  function getYoutubeVideoID(url) {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  // Function to get Vimeo video ID from a URL
  function getVimeoVideoID(url) {
    const regExp = /vimeo\.com\/(video\/|)(\d+)/;
    const match = url.match(regExp);
    return match ? match[2] : null;
  }
  const websiteTitle = document.title;

  const iframeData = []; // Store iframe and thumbnail URL data

  // Pre-fetch thumbnail URLs on DOMContentLoaded
  async function prepareThumbnails() {
    const iframes = document.querySelectorAll("iframe");

    for (const iframe of iframes) {
      const youtubeID = getYoutubeVideoID(iframe.src);
      const vimeoID = getVimeoVideoID(iframe.src);

      let thumbnailURL = null;
      let videoURL = null;

      if (youtubeID) {
        thumbnailURL = `https://img.youtube.com/vi/${youtubeID}/0.jpg`;
        videoURL = `https://www.youtube.com/watch?v=${youtubeID}`;
      } else if (vimeoID) {
        try {
          const response = await fetch(
            `https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/${vimeoID}`
          );
          if (!response.ok) {
            throw new Error(`Vimeo API error: ${response.status}`);
          }
          const data = await response.json();
          thumbnailURL = data.thumbnail_url;
          videoURL = `https://vimeo.com/${vimeoID}`;
        } catch (error) {
          console.error("Error fetching Vimeo thumbnail:", error);
          thumbnailURL = "placeholder.jpg"; // Use a placeholder
          videoURL = `https://vimeo.com/${vimeoID}`;
        }
      }

      if (thumbnailURL) {
        iframeData.push({
          originalIframe: iframe,
          thumbnailURL: thumbnailURL,
          videoURL: videoURL,
        });
      }
    }
  }

  // ... (addTitleToPrint and addLinksOnPrint functions - same as before) ...
  function addTitleToPrint() {
    // Get the current page URL
    const pageUrl = window.location.href;

    // Split the website title by the `|` separator and remove extra spaces
    const titleParts = websiteTitle.split("|").map((part) => part.trim());

    // Create a parent div to contain all individual title lines
    const printTitleContainer = document.createElement("div");
    printTitleContainer.style.marginBottom = "10px";
    printTitleContainer.classList.add("print-only");

    // Create a link element to wrap the title and link back to the original page
    const titleLink = document.createElement("a");
    titleLink.href = pageUrl;
    titleLink.target = "_blank";
    titleLink.style.textDecoration = "none"; // Optional: Remove underline

    // Define an array of font sizes (adjust or expand as needed)
    const fontSizes = ["1.75rem", "1.2rem", "1rem", "1rem"];

    // Iterate through each title part and create separate divs
    titleParts.forEach((part, index) => {
      const titleLine = document.createElement("div");
      titleLine.textContent = part;

      // Use a different font size for each line based on available sizes or repeat the last one
      titleLine.style.fontSize =
        fontSizes[index] || fontSizes[fontSizes.length - 1];
      titleLine.style.fontWeight = "bold";
      titleLine.style.marginBottom = "5px"; // Add some margin between lines

      // Add the individual title line to the title link container
      titleLink.appendChild(titleLine);
    });

    // Add the title link to the main container
    printTitleContainer.appendChild(titleLink);

    // Add a horizontal rule below the title
    const horizontalRule = document.createElement("hr");
    printTitleContainer.appendChild(horizontalRule);

    // Try to find the main element; otherwise, prepend the container to the body
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.parentNode.insertBefore(printTitleContainer, mainContent);
    } else {
      document.body.insertBefore(printTitleContainer, document.body.firstChild);
    }
  }

  // Create references only before printing
  function addLinksOnPrint() {
    // Create the heading and assign an ID to it
    const referencesHeading = document.createElement("h2");
    referencesHeading.id = "printed-urls-heading";
    referencesHeading.classList.add("print-only");
    referencesHeading.textContent = "URLs for Links on this Page";

    // Create a paragraph after the heading
    const referencesDescription = document.createElement("p");
    referencesDescription.classList.add("print-only");
    referencesDescription.textContent =
      "List of all external URLs available on this page in case it is printed on paper and the inline links are no longer clickable.";

    const referencesList = document.createElement("ol");
    referencesList.classList.add("print-only");
    referencesList.className = "printed-link-urls";

    // Find the <main> element and insert the heading, paragraph, and list after it
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.insertAdjacentElement("afterend", referencesHeading);
      referencesHeading.insertAdjacentElement(
        "afterend",
        referencesDescription
      );
      referencesDescription.insertAdjacentElement("afterend", referencesList);
    }

    // Select all desired anchor links inside the main element
    const linkSelectors = "main a[href^='http'], main a[href^='ftp']";
    const links = document.querySelectorAll(linkSelectors);

    // Use a Set to track unique links
    const uniqueLinks = new Set();
    let linkIndex = 1;

    // Append each reference as an LI element with clickable anchor
    links.forEach((link) => {
      if (!uniqueLinks.has(link.href)) {
        uniqueLinks.add(link.href);

        const li = document.createElement("li");

        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.target = "_blank";
        anchor.textContent = link.href;

        li.appendChild(anchor);
        referencesList.appendChild(li);

        linkIndex++;
      }
    });
  }
  // Call prepareThumbnails to start fetching data
  prepareThumbnails();

  window.addEventListener("beforeprint", async () => {
    // Create and replace clones *inside* beforeprint
    for (const data of iframeData) {
      const clonedIframe = data.originalIframe.cloneNode(true); //deep clone
      clonedIframe.classList.add("print-only"); // Add class for printing
      data.originalIframe.classList.add("screen-only");

      const link = document.createElement("a");
      link.href = data.videoURL;
      link.target = "_blank";
      link.classList.add("replaced-video-thumbnail");

      const img = document.createElement("img");
      img.src = data.thumbnailURL;
      img.style.width = "100%";
      img.style.height = "auto";
      img.alt = "Video Thumbnail";
      //wait for image to load before replacing
      await new Promise((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Resolve even on error
        link.appendChild(img);
        clonedIframe.parentNode.replaceChild(link, clonedIframe);
      });
      //insert the clone after the original
      data.originalIframe.parentNode.insertBefore(
        clonedIframe,
        data.originalIframe.nextSibling
      );
    }
    addLinksOnPrint();
    addTitleToPrint();
  });

  window.addEventListener("afterprint", () => {
    //remove the print-only class after printing.
    const printOnlyElements = document.querySelectorAll(".print-only");
    printOnlyElements.forEach((el) => el.remove());
    const screenOnlyElements = document.querySelectorAll(".screen-only");
    screenOnlyElements.forEach((el) => el.classList.remove("screen-only"));
  });
});
