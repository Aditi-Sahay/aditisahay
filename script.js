// Typewriter Effect
const typewriter = document.querySelector(".typewriter");
const subtitle = "a storyteller, a dreamer, a rebel";
let i = 0;

function typeEffect() {
  if (i < subtitle.length) {
    typewriter.textContent += subtitle.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Rotate Book on Scroll
const bookImage = document.querySelector(".rotating-book");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (bookImage) {
    bookImage.style.transform = `rotate(${(scrollY * 0.1) % 10 - 5}deg)`;
  }
});
