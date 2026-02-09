let currentPage = 0;
const pages = document.querySelectorAll(".page");

function flipPage() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}

/* 🌧️ Background rain effect */
function createDrop() {
  const drop = document.createElement("div");
  drop.classList.add("drop");
  drop.innerText = "💧";
  drop.style.left = Math.random() * 100 + "vw";
  drop.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 5000);
}

setInterval(createDrop, 300);
