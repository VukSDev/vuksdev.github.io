// Smooth scroll to section when a navigation link is clicked
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate the target position
            let targetPosition;

            // Check if it's a mobile view and adjust the offset
            if (window.innerWidth <= 768) {
                const navHeight = document.querySelector("nav").offsetHeight;
                targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - (navHeight + 20); // Adjust this value for mobile
            } else {
                // For desktop or larger screens, use a different offset
                const navHeight = document.querySelector("nav").offsetHeight;
                targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - (navHeight - 20); // Adjust this value for desktop
            }

            // Scroll to the target position with smooth behavior
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
