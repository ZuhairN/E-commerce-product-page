'use strict';

const menu = document.querySelector('.menu');
const mainImg = document.querySelector('.main-img');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const cart = document.querySelector('.cart');

menu.addEventListener('click', (e) => {
  const nav = e.target.parentElement;
  if (nav.getAttribute('aria-expanded') === 'false') {
    nav.setAttribute('aria-expanded', 'true');
  } else {
    nav.setAttribute('aria-expanded', 'false');
  }
});

next.addEventListener('click', () => {
  const img = mainImg.getAttribute('src');
  for (let i = 1; i < 5; i++) {
    if (img.indexOf(i) > 0) {
      if (i < 4) {
        mainImg.setAttribute('src', img.replace(`${i}`, `${i + 1}`));
        break;
      } else {
        mainImg.setAttribute('src', img.replace(`${i}`, '1'));
      }
    }
  }
});

previous.addEventListener('click', () => {
  const img = mainImg.getAttribute('src');
  for (let i = 1; i < 5; i++) {
    if (img.indexOf(i) > 0) {
      if (i > 1) {
        mainImg.setAttribute('src', img.replace(`${i}`, `${i - 1}`));
        break;
      } else {
        mainImg.setAttribute('src', img.replace(`${i}`, '4'));
        break;
      }
    }
  }
});

cart.addEventListener('click', () => {
  const details = cart.children[0];
  details.classList.toggle('active');
});
