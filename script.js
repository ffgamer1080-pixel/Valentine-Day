// ================= CONFIG =================
const PHOTOS = [
  "Photo/s1.jpg",
  "Photo/s2.jpg",
  "Photo/s3.jpg",
  "Photo/s4.jpg",
  "Photo/s5.jpg",
  "Photo/s6.jpg"
];

const WING_LEFT = "Butterfly/wing-left.png";
const WING_RIGHT = "Butterfly/wing-right.png";

const RAIN_TEXT = "❤️ I LOVE YOU 🩷";

// ================= ELEMENTS =================
const sky = document.getElementById("sky");
const textRain = document.getElementById("textRain");
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

// ================= WAKE LOCK =================
if ("wakeLock" in navigator) {
  navigator.wakeLock.request("screen").catch(() => {});
}

// ================= MUSIC =================
let playing = false;
toggle.onclick = () => {
  if (playing) {
    music.pause();
    toggle.textContent = "🎵";
  } else {
    music.play();
    toggle.textContent = "🔊";
  }
  playing = !playing;
};

// ================= TEXT RAIN =================
function createTextRain() {
  const span = document.createElement("div");
  span.className = "rain-text";
  span.textContent = RAIN_TEXT;

  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.animationDuration = 6 + Math.random() * 4 + "s";

  textRain.appendChild(span);

  setTimeout(() => span.remove(), 10000);
}

setInterval(createTextRain, 300);

// ================= BUTTERFLY =================
function createButterfly() {
  const b = document.createElement("div");
  b.className = "butterfly";

  const body = document.createElement("img");
  body.className = "body";
  body.src = PHOTOS[Math.floor(Math.random() * PHOTOS.length)];

  const left = document.createElement("img");
  left.className = "wing left";
  left.src = WING_LEFT;

  const right = document.createElement("img");
  right.className = "wing right";
  right.src = WING_RIGHT;

  b.append(left, body, right);
  sky.appendChild(b);

  let x = Math.random() * (window.innerWidth - 160);
  let y = window.innerHeight + 160;

  const speed = 0.8 + Math.random() * 0.8;
  const drift = (Math.random() - 0.5) * 0.6;

  function fly() {
    y -= speed;
    x += drift;
    b.style.transform = `translate(${x}px, ${y}px)`;

    if (y > -200) {
      requestAnimationFrame(fly);
    } else {
      b.remove();
    }
  }
  fly();
}

setInterval(createButterfly, 1200);
