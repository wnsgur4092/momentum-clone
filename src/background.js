//background.js

import { getRandomInt } from './util.js';

export function changeBackground() {
  const maxImageCount = 8;
  const imageNumber = Math.floor(Math.random() * maxImageCount) + 1;
  const imageURL = `image/bg/${imageNumber}.jpg`;

  document.body.style.backgroundImage = `url('${imageURL}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
}

const imageNumber = 8;

export function paintBg() {
  const imageNumber = getRandomInt(imageNumber);
}
