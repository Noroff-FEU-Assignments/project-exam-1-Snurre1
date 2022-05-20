const gap = 17;

const carousel = document.querySelector(".flex-container");
const content = document.getElementsByClassName("food-container");
const next = document.querySelector(".btn-right");
const prev = document.querySelector(".btn-left");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});
let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
