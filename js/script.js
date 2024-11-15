// Fungsi Slides
let slideIndex = 0;
function moveSlide(step) {
    let slides = document.querySelectorAll(".slider .slides img");
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1; 
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0; 
    }

    let slidesContainer = document.querySelector(".slider .slides");
    slidesContainer.style.transform = "translateX(" + (-slideIndex * 100) + "%)";
}

// Autoplay
setInterval(() => {
    moveSlide(1); 
}, 3000); // 3 detik
