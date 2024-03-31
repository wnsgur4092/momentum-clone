// main.js
import { updateDateTime } from './time.js';
import { setUpGreetingForm } from './name.js';
import { setUpTodoForm } from './todo.js';
import { success, fail } from './weather.js';

document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  setUpGreetingForm();
  setUpTodoForm();
  navigator.geolocation.getCurrentPosition(success, fail);
});
