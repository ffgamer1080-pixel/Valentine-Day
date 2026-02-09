/* =========================
   ROTATE TO CONTINUE
   ========================= */

const overlay = document.getElementById("rotateOverlay");

function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    overlay.style.display = "none"; // landscape
  } else {
    overlay.style.display = "flex"; // portrait
  }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
checkOrientation();

/* =========================
   BACKGROUND TEXT RAIN
   ========================= */

const canvas = document.getElementById("textRain");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const letters = "HAPPY VALENTINE DAY ";
const fontSize = 14;
let columns = canvas.width / fontSize;
let drops = [];

function resetDrops() {
  columns = canvas.width / fontSize;
  drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height;
  }
}
resetDrops();

function drawTextRain() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff4da6";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(
      Math.floor(Math.random() * letters.length)
    );
    ctx.fillText(text, i * fontSize, drops[i]);

    if (drops[i] > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i] += fontSize;
  }
}

setInterval(drawTextRain, 50);

/* =========================
   MAIN TEXT + BEAT SYNC
   ========================= */

const texts = [
  "HAPPY VALENTINE 💖",
  "MY SWEETHEART ❤️",
  "YOU ARE MY WORLD 🌍",
  "I LOVE YOU 💌"
];

const mainText = document.getElementById("mainText");
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    mainText.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;

    // 💓 Beat sync
    mainText.classList.add("beat");
    setTimeout(() => mainText.classList.remove("beat"), 300);

  } else {
    setTimeout(() => {
      mainText.innerHTML = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
    }, 2000);
  }
}

setInterval(typeEffect, 120);
