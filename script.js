// ================= PHOTOS =================
const photos = [
  "Photo/s1.jpg",
  "Photo/s2.jpg",
  "Photo/s3.jpg",
  "Photo/s4.jpg",
  "Photo/s5.jpg",
  "Photo/s6.jpg"
];

// ================ WINGS ===================
const WING_LEFT = "Butterfly/wing-left.png";
const WING_RIGHT = "Butterfly/wing-right.png";

// ================ ELEMENTS =================
const sky = document.getElementById("sky");
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

// ================ WAKE LOCK ================
if ("wakeLock" in navigator) {
  navigator.wakeLock.request("screen").catch(() => {});
}

// ================ MUSIC ====================
let isPlaying = false;
toggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggle.textContent = "🎵";
  } else {
    music.play();
    toggle.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});

// ================ BUTTERFLY ================
function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.className = "butterfly";

  const body = document.createElement("img");
  body.className = "body";
  body.src = photos[Math.floor(Math.random() * photos.length)];

  const leftWing = document.createElement("img");
  leftWing.className = "wing left";
  leftWing.src = WING_LEFT;

  const rightWing = document.createElement("img");
  rightWing.className = "wing right";
  rightWing.src = WING_RIGHT;

  butterfly.append(leftWing, body, rightWing);
  sky.appendChild(butterfly);

  let x = Math.random() * (window.innerWidth - 160);
  let y = window.innerHeight + 160;

  const speed = 0.8 + Math.random() * 0.8;
  const drift = (Math.random() - 0.5) * 0.6;

  function fly() {
    y -= speed;
    x += drift;
    butterfly.style.transform = `translate(${x}px, ${y}px)`;

    if (y > -200) {
      requestAnimationFrame(fly);
    } else {
      butterfly.remove();
    }
  }

  fly();
}

// ================ SPAWN ====================
setInterval(createButterfly, 1200);
