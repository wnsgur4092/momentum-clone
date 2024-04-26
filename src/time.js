// time.js

//1. 오늘 시간 불러오기

const date = document.querySelector('.date');
const time = document.querySelector('.time');

function getTime() {
  const now = new Date();

  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

  const date = now.toLocaleDateString('en-US', dateOptions).replace(/\//g, '.');
  const time = now.toLocaleTimeString('en-US', timeOptions);

  return { date, time };
}

//2. 시간 초 단위로 증가 시키기
export function updateTime() {
  getTime();
  const { date: dateText, time: timeText } = getTime();
  date.innerText = dateText;
  time.innerText = timeText;
  setInterval(getTime, 1000);
}
