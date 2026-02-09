/* 📖 BOOK AUTO PAGE FLIP (FIXED) */
const pages = document.querySelectorAll(".page");
let current = 0;

/* set proper stacking order */
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

/* 🌧️ REAL BACKGROUND RAIN */
const rain = document.createElement("div");
rain.className = "rain";
document.body.appendChild(rain);

function createDrop() {
  const drop = document.createElement("div");
  drop.className = "drop";
  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.animationDuration = 0.3 + Math.random() * 0.2 + "s";
  rain.appendChild(drop);

  /* 💖 Hearts & 🦋 Butterflies flying UP */
const flyIcons = ["❤️", "💖", "💗", "🦋", "💙", "💜"];

function createFly() {
  const el = document.createElement("div");
  el.className = "fly";
  el.innerText = flyIcons[Math.floor(Math.random() * flyIcons.length)];
  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.fontSize = 14 + Math.random() * 10 + "px";
  el.style.animationDuration = 4 + Math.random() * 3 + "s";

  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 7000);
}

setInterval(createFly, 600);
  
  setTimeout(() => drop.remove(), 2000);
}

setInterval(createDrop, 180);
