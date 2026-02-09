/* 📖 BOOK AUTO PAGE FLIP (FIXED) */
const pages = document.querySelectorAll(".page");
let current = 0;

/* set proper stacking order */
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

/* auto flip */
setInterval(() => {
  if (current < pages.length) {
    pages[current].classList.add("flipped");
    current++;
  } else {
    // reset book
    pages.forEach(page => page.classList.remove("flipped"));
    current = 0;
  }
}, 3000); // 3 sec per photo

/* 🌧️ REAL BACKGROUND RAIN */
const rain = document.createElement("div");
rain.className = "rain";
document.body.appendChild(rain);

function createDrop() {
  const drop = document.createElement("div");
  drop.className = "drop";
  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.animationDuration = 0.8 + Math.random() * 0.7 + "s";
  rain.appendChild(drop);

  setTimeout(() => drop.remove(), 2000);
}

setInterval(createDrop, 80);
