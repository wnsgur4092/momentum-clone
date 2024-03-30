// main.js
import { updateDateTime } from './time.js';
import { setUpGreetingForm } from './name.js';
import { setUpTodoForm } from './todo.js';

document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  setInterval(updateDateTime, 1000); // 매 초마다 updateDateTime 초 상승
  setUpGreetingForm(); // 이름 입력 폼 설정
  setUpTodoForm(); // To-Do
});
