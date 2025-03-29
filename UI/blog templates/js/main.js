document.addEventListener("DOMContentLoaded", function () {
    // Image Slider
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3s
    }

    // Manual Slider Controls
    document.querySelectorAll(".prev, .next").forEach(button => {
        button.addEventListener("click", function () {
            let slides = document.querySelectorAll(".slide");
            slides.forEach(slide => slide.style.display = "none");

            if (this.classList.contains("prev")) {
                slideIndex--;
                if (slideIndex < 1) slideIndex = slides.length;
            } else {
                slideIndex++;
                if (slideIndex > slides.length) slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form Validation
    document.querySelector("#contactForm").addEventListener("submit", function (e) {
        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let message = document.querySelector("#message").value.trim();
        let error = "";

        if (name === "" || email === "" || message === "") {
            error += "All fields are required.\n";
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            error += "Enter a valid email address.\n";
        }

        if (error) {
            e.preventDefault();
            alert(error);
        }
    });
});
