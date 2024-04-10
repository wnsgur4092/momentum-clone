//background.js
import { getRandomInt } from './util.js';

// export function changeBackground() {
//   const maxImageCount = 8;
//   const imageNumber = Math.floor(Math.random() * maxImageCount) + 1;
//   const imageURL = `image/bg/${imageNumber}.jpg`;

//   document.body.style.backgroundImage = `url('${imageURL}')`;
//   document.body.style.backgroundSize = 'cover';
//   document.body.style.backgroundPosition = 'center';
// }

// const imageNumber = 8;

// export function paintBg() {
//   const imageNumber = getRandomInt(imageNumber);
// }

const body = document.querySelector('body');
const BACKGROUND_NUMBER = 8;

//TODO: 랜덤 숫자를 넣어서 총 8개의 백그라운드 이미지 불러오기
export function updateBackground() {
  const imageNumber = getRandomInt(BACKGROUND_NUMBER);
  const imageURL = `image/bg/${imageNumber}.jpg`;
  body.style.background = `url('${imageURL}') center`;
  body.style.backgroundSize = 'cover';
}
