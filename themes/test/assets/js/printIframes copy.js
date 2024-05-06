document.addEventListener("DOMContentLoaded", function () {
  // Function to get YouTube video ID from a URL
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

  // Replace YouTube and Vimeo iframes with thumbnails
  async function replaceIframesWithThumbnails() {
    const iframes = document.querySelectorAll("iframe");

    for (const iframe of iframes) {
      const youtubeID = getYoutubeVideoID(iframe.src);
      const vimeoID = getVimeoVideoID(iframe.src);

      if (youtubeID) {
        // Replace with YouTube thumbnail
        const thumbnailURL = `https://img.youtube.com/vi/${youtubeID}/0.jpg`;
        const link = document.createElement("a");
        link.href = `https://www.youtube.com/watch?v=${youtubeID}`;
        link.target = "_blank";
        link.className = "replaced-video-thumbnail"; // Add class

        const img = document.createElement("img");
        img.src = thumbnailURL;
        img.style.width = "100%";
        img.style.height = "auto";
        img.alt = "YouTube Video Thumbnail";

        link.appendChild(img);
        iframe.parentNode.replaceChild(link, iframe);
      } else if (vimeoID) {
        // Fetch the Vimeo thumbnail via the oEmbed endpoint
        const response = await fetch(
          `https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/${vimeoID}`
        );
        const data = await response.json();
        const thumbnailURL = data.thumbnail_url;

        const link = document.createElement("a");
        link.href = `https://vimeo.com/${vimeoID}`;
        link.target = "_blank";
        link.className = "replaced-video-thumbnail"; // Add class

        const img = document.createElement("img");
        img.src = thumbnailURL;
        img.style.width = "100%";
        img.style.height = "auto";
        img.alt = "Vimeo Video Thumbnail";

        link.appendChild(img);
        iframe.parentNode.replaceChild(link, iframe);
      }
    }
  }

  // Save the original state to restore later
  let originalHTML;

  // Create references only before printing
  function addLinksOnPrint() {
    // Create the heading and assign an ID to it
    const referencesHeading = document.createElement("h2");
    referencesHeading.id = "printed-urls-heading";

    referencesHeading.textContent = "URLs for Links on this Page";

    // Create a paragraph after the heading
    const referencesDescription = document.createElement("p");
    referencesDescription.textContent =
      "List of all external URLs available on this page in case it is printed on paper and the inline links are no longer clickable.";

    const referencesList = document.createElement("ol");
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

  // Store the current state before printing and reset afterward
  window.addEventListener("beforeprint", () => {
    // Save the original HTML structure
    originalHTML = document.body.innerHTML;

    replaceIframesWithThumbnails();
    addLinksOnPrint();
  });

  window.addEventListener("afterprint", () => {
    // Restore the original HTML structure
    document.body.innerHTML = originalHTML;
    // Optionally, refresh the page to ensure script execution starts over
    window.location.reload();
  });
});
