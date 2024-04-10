//util.js

// Make the Random Number from 1 to max
/**
 *
 * @param {*} max
 * @returns 1부터 max 중 하나의 리턴값을 반환 ex) max = 8이면, return 1,2,3,4,5,6,7,8 중
 */
export function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
