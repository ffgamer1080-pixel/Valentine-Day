let currentPage = 0;
const pages = document.querySelectorAll(".page");

function flipPage() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  }
}
