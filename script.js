let slides = document.querySelector('.slides');

let carousselPages = document.querySelectorAll('.caroussel-page');
let carousselDot = document.querySelectorAll('.dot');

let [currentPage, lastPage] = [0, 0];

function pageChange(currentPage) {
  let percentage = currentPage * -100;
  //Move current page into frame
  carousselPages[currentPage].style.transform = `translateX(${percentage}%)`;
  carousselDot[currentPage].classList.add('current');

  //Take last page out of frame
  carousselPages[lastPage].style.transform = `translateX(${percentage}%)`;
  carousselDot[lastPage].classList.remove('current');
  lastPage = currentPage;
}
