/* ===============================
   ELEMENTS
================================ */
const rotateOverlay = document.getElementById("rotateOverlay");
const tapText = document.getElementById("tap-text");
const music = document.getElementById("bg-music");
const canvas = document.getElementById("textRain");
const ctx = canvas.getContext("2d");


/* ===============================
   ORIENTATION FIX
================================ */
function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    rotateOverlay.style.display = "none";
    tapText.style.display = "block";
  } else {
    rotateOverlay.style.display = "flex";
    tapText.style.display = "none";
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);


/* ===============================
   MUSIC (100% SAFE)
================================ */
tapText.addEventListener("click", () => {
  music.muted = false;
  music.currentTime = 0;
  music.play().catch(() => {});
  tapText.style.display = "none";
});


/* ===============================
   TEXT RAIN (SMOOTH & FIXED)
================================ */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const texts = ["💖", "❤", "Love", "🌹"];
const fontSize = 18;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(0);

function drawRain() {
  ctx.fillStyle = "rgba(0,0,0,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffffff";
  ctx.font = fontSize + "px Arial";

  for (let i = 0; i < drops.length; i++) {
    const text = texts[Math.floor(Math.random() * texts.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.97) {
      drops[i] = 0;
    } else {
      drops[i]++;
    }
  }
}

setInterval(drawRain, 80);
