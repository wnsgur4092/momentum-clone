//background.js
import { getRandomInt } from './util.js';

const body = document.querySelector('body');
const BACKGROUND_NUMBER = 8;

//TODO: 랜덤 숫자를 넣어서 총 8개의 백그라운드 이미지 불러오기
export function updateBackground() {
  const imageNumber = getRandomInt(BACKGROUND_NUMBER);
  const imageURL = `image/bg/${imageNumber}.jpg`;
  body.style.background = `url('${imageURL}') center`;
  body.style.backgroundSize = 'cover';
}
