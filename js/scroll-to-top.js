// scroll-to-top.js
// Get the scroll-to-top button element
var scrollToTopBtn = document.getElementById("scroll-to-top");

// Function to show or hide the scroll-to-top button
function toggleScrollTopButton() {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

// Add a scroll event listener to toggle the button
window.addEventListener("scroll", toggleScrollTopButton);

// Smooth scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of anchor links
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
