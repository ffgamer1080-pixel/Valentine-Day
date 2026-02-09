/* ===============================
   ELEMENTS
================================ */
const rotateOverlay = document.getElementById("rotateOverlay");
const tapText = document.getElementById("tap-text");
const music = document.getElementById("bg-music");
const canvas = document.getElementById("textRain");
const ctx = canvas.getContext("2d");


/* ===============================
   ORIENTATION CHECK
================================ */
function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    // landscape
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
   MUSIC (HARD UNLOCK FIX)
================================ */
tapText.addEventListener("click", () => {
  music.muted = false;
  music.currentTime = 0;

  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.log("Audio blocked:", err);
    });
  }

  tapText.style.display = "none";
});


/* ===============================
   TEXT RAIN
================================ */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const texts = ["💖", "❤", "Love", "Valentine", "😘", "🌹"];
const drops = Array(60).fill(0);

function drawRain() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";

  drops.forEach((y, i) => {
    const text = texts[Math.floor(Math.random() * texts.length)];
    const x = i * (canvas.width / drops.length);

    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.97) {
      drops[i] = 0;
    } else {
      drops[i] += 2;
    }
  });
}

setInterval(drawRain, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
