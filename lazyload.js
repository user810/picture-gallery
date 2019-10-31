"use strict";
// Run after the HTML document has finished loading
document.addEventListener("DOMContentLoaded", function() {

    // Get our lazy-loaded images
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy-image"));

    // Make an observer and change image source from data-src to src
    if ("IntersectionObserver" in window) {
        // Create new observer object
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            // Loop through IntersectionObserverEntry objects
            entries.forEach(function(entry) {
              // Do these if the target intersects with the root
              if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove("lazy-image");
                lazyImageObserver.unobserve(lazyImage);
              }
            });
        });
      
        // Loop through and observe each image
        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      }
      
});