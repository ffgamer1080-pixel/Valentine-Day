/* 🔆 KEEP SCREEN ON */

let wakeLock = null;
async function keepScreenOn() {
  try {
    wakeLock = await navigator.wakeLock.request("screen");
  } catch {}
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") keepScreenOn();
});
keepScreenOn();

/* 🎵 MUSIC TOGGLE */

const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

music.volume = 0.4;
music.play().catch(()=>{});

toggle.onclick = () => {
  if (music.paused) {
    music.play();
    toggle.innerText = "🎵";
    toggle.classList.remove("music-off");
  } else {
    music.pause();
    toggle.innerText = "🔇";
    toggle.classList.add("music-off");
  }
};

/* 📸 PHOTO RAIN – FASTER */

const photos = [
  "Photo/s1.jpg","Photo/s2.jpg","Photo/s3.jpg",
  "Photo/s4.jpg","Photo/s5.jpg","Photo/s6.jpg"
];

const photoRain = document.getElementById("photoRain");
const butterflyLayer = document.getElementById("butterflyLayer");

function createPhoto() {
  const img = document.createElement("img");
  img.src = photos[Math.floor(Math.random()*photos.length)];
  img.className = "rain-photo";

  img.style.left = Math.random() * window.innerWidth + "px";

  /* 🚀 SPEED UP HERE */
  img.style.animationDuration = 7 + Math.random()*3 + "s"; // FAST DROP

  photoRain.appendChild(img);

  // 🦋 Butterfly chance
  if (Math.random() < 0.35) {
    setTimeout(() => catchByButterfly(img), 1800);
  }

  setTimeout(()=>img.remove(),12000);
}

/* 🚀 MORE FREQUENT PHOTOS */
setInterval(createPhoto, 700);

/* 🦋 BUTTERFLY CATCH */

function catchByButterfly(photo) {
  if (!photo.parentNode) return;

  const rect = photo.getBoundingClientRect();
  photo.remove();

  const wrapper = document.createElement("div");
  wrapper.className = "butterfly-wrapper";
  wrapper.style.left = rect.left + "px";
  wrapper.style.top = rect.top + "px";
  wrapper.style.animationDuration = 6 + Math.random()*2 + "s";

  const img = document.createElement("img");
  img.src = photo.src;
  img.style.width = "90px";
  img.style.borderRadius = "12px";
  img.style.marginBottom = "4px";

  const butterfly = document.createElement("div");
  butterfly.className = "butterfly";
  butterfly.innerText = "🦋";

  wrapper.appendChild(img);
  wrapper.appendChild(butterfly);
  butterflyLayer.appendChild(wrapper);

  setTimeout(()=>wrapper.remove(),9000);
}
