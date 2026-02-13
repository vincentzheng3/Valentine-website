// Elements
const envelopeScreen = document.getElementById("envelope-container");
const letterScreen = document.getElementById("letter-container");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Helper
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

// Click envelope -> show letter
envelopeScreen.addEventListener("click", () => {
  envelopeScreen.style.display = "none";
  letterScreen.style.display = "flex";
  letterScreen.setAttribute("aria-hidden", "false");

  // Animate the window pop-in
  window.setTimeout(() => {
    document.querySelector(".letter-window")?.classList.add("open");
  }, 50);
});

// Make the NO button dodge the mouse (but keep it on screen)
noBtn.addEventListener("mouseover", () => {
  const distance = 180;
  const angle = Math.random() * Math.PI * 2;

  const rawX = Math.cos(angle) * distance;
  const rawY = Math.sin(angle) * distance;

  const rect = noBtn.getBoundingClientRect();
  const padding = 20;

  // Max translation so the button stays inside viewport
  const maxLeft = rect.left - padding;
  const maxRight = window.innerWidth - rect.right - padding;
  const maxUp = rect.top - padding;
  const maxDown = window.innerHeight - rect.bottom - padding;

  const moveX = clamp(rawX, -maxLeft, maxRight);
  const moveY = clamp(rawY, -maxUp, maxDown);

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "YIPPEEEE!";
  catImg.src = "cat_dance.gif";

  document.querySelector(".letter-window")?.classList.add("final");

  buttons.style.display = "none";
  finalText.hidden = false;
});
