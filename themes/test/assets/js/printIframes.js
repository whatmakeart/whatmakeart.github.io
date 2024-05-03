document.addEventListener("DOMContentLoaded", function () {
  // Function to get YouTube video ID from a URL
  function getYoutubeVideoID(url) {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  // Replace YouTube iframes with thumbnails
  function replaceIframesWithThumbnails() {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      const videoID = getYoutubeVideoID(iframe.src);
      if (videoID) {
        const thumbnailURL = `https://img.youtube.com/vi/${videoID}/0.jpg`;
        const link = document.createElement("a");
        link.href = `https://www.youtube.com/watch?v=${videoID}`;
        link.target = "_blank";

        const img = document.createElement("img");
        img.src = thumbnailURL;
        img.style.width = "100%"; // Adjust size as necessary
        img.style.height = "auto";
        img.alt = "YouTube Video Thumbnail";

        link.appendChild(img);

        // Replace the iframe with the link containing the thumbnail
        iframe.parentNode.replaceChild(link, iframe);
      }
    });
  }

  // Listen for print events to replace iframes right before printing
  window.addEventListener("beforeprint", replaceIframesWithThumbnails);
});
