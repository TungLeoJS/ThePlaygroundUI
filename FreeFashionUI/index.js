const arrowButtonLeft = document.querySelector('.button--left');
const arrowButtonRight = document.querySelector('.button--right');

arrowButtonLeft.addEventListener('click', () => {
  const imageList = document.querySelector('.offer-image__list');
  imageList.style =
    'transform: translateX(calc(0.6666666667 * 2 * (16.6% - 1.71875rem) * -1)); transition: transform .2s ease';
});

arrowButtonRight.addEventListener('click', () => {
  const imageList = document.querySelector('.offer-image__list');
  imageList.style =
    'transform: translateX(calc(0.3333333334 * 2 * (16.6% - 1.71875rem))); transition: transform .2s ease';
});
