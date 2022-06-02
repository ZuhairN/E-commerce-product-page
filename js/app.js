'use strict';

const menu = document.querySelector('.menu');
const mainImg = document.querySelector('.main-img');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

menu.addEventListener('click', (e) => {
  const nav = e.target.parentElement;
  if (nav.getAttribute('aria-expanded') === 'false') {
    nav.setAttribute('aria-expanded', 'true');
  } else {
    nav.setAttribute('aria-expanded', 'false');
  }
});

next.addEventListener('click', () => {
  let bgImg = mainImg.style;
  for (let i = 1; i < 5; i++) {
    if (bgImg.backgroundImage.indexOf(i) > 0) {
      if (i < 4) {
        bgImg.backgroundImage = bgImg.backgroundImage.replace(
          `${i}`,
          `${i + 1}`
        );
        break;
      } else {
        bgImg.backgroundImage = bgImg.backgroundImage.replace(`${i}`, '1');
      }
    }
  }
});

previous.addEventListener('click', () => {
  let bgImg = mainImg.style;
  for (let i = 1; i < 5; i++) {
    if (bgImg.backgroundImage.indexOf(i) > 0) {
      if (i > 1) {
        bgImg.backgroundImage = bgImg.backgroundImage.replace(
          `${i}`,
          `${i - 1}`
        );
        break;
      } else {
        bgImg.backgroundImage = bgImg.backgroundImage.replace(`${i}`, '4');
        break;
      }
    }
  }
});
