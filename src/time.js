// time.js
export function updateDateTime() {
  const { date, time } = getCurrentDateTime();

  const dateElement = document.querySelector('.date');
  const timeElement = document.querySelector('.time');

  dateElement.textContent = date;
  timeElement.textContent = time;
}

function getCurrentDateTime() {
  const now = new Date();

  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' }; // DD.MM.YYYY 형식으로 변경
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true }; // HH:MM AM/PM 형식으로 변경

  const date = now.toLocaleDateString('en-US', dateOptions).replace(/\//g, '.');
  const time = now.toLocaleTimeString('en-US', timeOptions);

  return { date, time };
}
