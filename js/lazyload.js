document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('img.lazy');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const image = entry.target;

            if (entry.isIntersecting) {
                // Load the image if it's not loaded yet
                if (!image.src) {
                    image.src = image.dataset.src;
                    image.onload = () => image.classList.remove("hidden");
                }
                image.style.opacity = 1; // Fade in when in viewport
                image.style.visibility = "visible"; // Ensure visibility
            } else {
                // Hide the image when out of the viewport
                image.classList.add("hidden");
                image.style.opacity = 0;
                image.style.visibility = "hidden"; // Fully hide from view
            }
        });
    }, {
        threshold: 0.05, // Image is considered in view if 10% is visible
    });

    lazyImages.forEach((image) => {
        observer.observe(image);
    });
});
