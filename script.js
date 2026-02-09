/* Book flip */
let currentPage = 0;
const pages = document.querySelectorAll(".page");

function flipPage() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}

/* 🌧️ Pure background rain (line drops) */
const rainContainer = document.createElement("div");
rainContainer.className = "rain";
document.body.appendChild(rainContainer);

function createRainDrop() {
  const drop = document.createElement("div");
  drop.className = "drop";
  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.animationDuration = 0.8 + Math.random() * 0.7 + "s";

  rainContainer.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 2000);
}

setInterval(createRainDrop, 80);
