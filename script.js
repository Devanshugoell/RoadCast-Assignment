const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

//Image Slider

let currentSlide = 0;
const totalSlides = 3;

function goToSlide(slideIndex) {
  const slider = document.getElementById("slider");
  currentSlide = slideIndex;
  slider.style.transform = `translateX(-${100 * slideIndex}%)`;

  updateActiveDot();
}

function updateActiveDot() {
  for (let i = 0; i < totalSlides; i++) {
    const Testimonial = document.getElementById(`Testimonial-${i}`);
    if (i === currentSlide) {
      Testimonial.classList.remove("bg-gray-300");
      Testimonial.classList.add("bg-black");
    } else {
      Testimonial.classList.add("bg-gray-300");
      Testimonial.classList.remove("bg-black");
    }
  }
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
}, 1500);

// Toggle navbar

document.getElementById("menu-toggle").addEventListener("click", function () {
  navLinks.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
