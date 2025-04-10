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

// Floating Element Logic
function createFloaty(className) {
  const el = document.createElement("div");
  el.classList.add(className);
  el.style.top = `${Math.random() * 100}%`;
  el.style.left = `${Math.random() * 100}%`;
  el.style.animationDuration = `${Math.random() * 4 + 3}s`;
  el.style.opacity = Math.random();
  document.body.appendChild(el);

  setTimeout(() => el.remove(), 8000);
}

setInterval(() => {
  const options = ["floating-stars", "floating-cassette", "floating-feathers"];
  const random = options[Math.floor(Math.random() * options.length)];
  createFloaty(random);
}, 3000);

// Rotate Book on Scroll
const bookImage = document.querySelector(".rotating-book");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (bookImage) {
    bookImage.style.transform = `rotate(${(scrollY * 0.1) % 10 - 5}deg)`;
  }
});

// Moon Toggle (Dark/Mystic Mode)
const moonToggle = document.querySelector("#moon-toggle");

if (moonToggle) {
  moonToggle.addEventListener("click", () => {
    document.body.classList.toggle("mystic-mode");
  });
}
