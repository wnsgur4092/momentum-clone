// main.js
import { getCurrentDateTime } from './time.js';
import { setUpGreetingForm } from './name.js';

function updateDateTime() {
  const { date, time } = getCurrentDateTime();

  const dateElement = document.querySelector('.date');
  const timeElement = document.querySelector('.time');

  dateElement.textContent = date;
  timeElement.textContent = time;
}

document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
  setUpGreetingForm();
});
