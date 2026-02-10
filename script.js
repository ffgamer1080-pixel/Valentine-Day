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

/* 📸 PHOTO RAIN */

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
  img.style.left = Math.random()*window.innerWidth+"px";
  img.style.animationDuration = 14 + Math.random()*6 + "s";
  photoRain.appendChild(img);

  // 🦋 30% chance butterfly catches photo
  if (Math.random() < 0.3) {
    setTimeout(() => catchByButterfly(img), 3000);
  }

  setTimeout(()=>img.remove(),22000);
}

setInterval(createPhoto, 1300);

/* 🦋 BUTTERFLY RANDOM LEFT / RIGHT */

function catchByButterfly(photo) {
  if (!photo.parentNode) return;

  const rect = photo.getBoundingClientRect();
  photo.remove();

  const wrapper = document.createElement("div");
  wrapper.className = "butterfly-wrapper";

  // Random LEFT or RIGHT movement
  const direction = Math.random() < 0.5 ? -1 : 1;
  const horizontalShift = 120 + Math.random()*180;

  wrapper.style.left = rect.left + "px";
  wrapper.style.top = rect.top + "px";
  wrapper.style.transform = `translateX(${direction * horizontalShift}px)`;
  wrapper.style.animationDuration = 7 + Math.random()*3 + "s";

  const img = document.createElement("img");
  img.src = photo.src;
  img.style.width = "90px";
  img.style.borderRadius = "12px";

  const butterfly = document.createElement("div");
  butterfly.className = "butterfly";
  butterfly.innerText = "🦋";

  wrapper.appendChild(img);
  wrapper.appendChild(butterfly);
  butterflyLayer.appendChild(wrapper);

  setTimeout(()=>wrapper.remove(),10000);
}
