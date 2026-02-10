/* =========================
   ROTATE + MUSIC (SOFT)
   ========================= */

const overlay = document.getElementById("rotateOverlay");
const music = document.getElementById("bgMusic");
let musicStarted = false;

music.volume = 0.4; // 💗 soft romantic volume

function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    overlay.style.display = "none";
    if (!musicStarted) {
      music.play().catch(()=>{});
      musicStarted = true;
    }
  } else {
    overlay.style.display = "flex";
  }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
checkOrientation();

/* =========================
   PHOTO RAIN (SLOW MODE)
   ========================= */

const photos = [
  "Photo/s1.jpg",
  "Photo/s2.jpg",
  "Photo/s3.jpg",
  "Photo/s4.jpg",
  "Photo/s5.jpg",
  "Photo/s6.jpg"
];

const photoRain = document.getElementById("photoRain");

function createPhotoRain() {
  const img = document.createElement("img");
  img.src = photos[Math.floor(Math.random() * photos.length)];
  img.className = "rain-photo";

  img.style.left = Math.random() * window.innerWidth + "px";
  img.style.animationDuration = 12 + Math.random() * 6 + "s"; // 💗 slow fall

  photoRain.appendChild(img);

  setTimeout(() => img.remove(), 18000);
}

setInterval(createPhotoRain, 1200); // 💗 slow frequency

/* =========================
   CENTER TEXT (SLOW TYPE)
   ========================= */

const texts = [
  "HAPPY VALENTINE 💖",
  "MY SWEETHEART ❤️",
  "YOU ARE MY WORLD 🌍",
  "I LOVE YOU 💌"
];

const mainText = document.getElementById("mainText");
let t = 0, c = 0;

function typeEffect() {
  if (c < texts[t].length) {
    mainText.innerHTML += texts[t][c++];
    mainText.classList.add("beat");
    setTimeout(() => mainText.classList.remove("beat"), 600);
  } else {
    setTimeout(() => {
      mainText.innerHTML = "";
      c = 0;
      t = (t + 1) % texts.length;
    }, 3000);
  }
}

setInterval(typeEffect, 220); // 💗 slow typing
