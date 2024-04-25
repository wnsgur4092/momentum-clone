//greeting.js

import { LS } from './constant/localStorage.js';

const form = document.querySelector('.greeting__form');
const input = document.querySelector('.greeting__input');
const greeting = document.querySelector('.greeting__message');
const todos = document.querySelector('.todo__container');

const SHOWING_CLASS = 'showing';

// GREETING
function savedName(name) {
  localStorage.setItem(LS.CURRENT_USER, name);
}

function fetchGreeting(name) {
  form.classList.remove(SHOWING_CLASS); // CURRENT_USER가  있으면 form 안보이게 하기
  greeting.classList.add(SHOWING_CLASS); //CURRENT_USER가 있으면 greeting 보이게 하기
  todos.classList.add(SHOWING_CLASS); //CURRENT_USER가 있으면 todo 보이게 하기
  greeting.innerText = `Hello, ${name}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  fetchGreeting(currentValue);
  savedName(currentValue); // name 인자가 LocalStorage의 CURRENT_USER로 저장
}

function askName() {
  form.classList.add(SHOWING_CLASS); // CURRENT_USER가 있으면 form 보이게 하기
  form.addEventListener('submit', handleSubmit);
}

export function showGreeting() {
  // Local Storage 에서 CURRENT_USER 불러오기
  // 만약 저장된 CURRENT_USER가 없다면 input 불러와서 CURRENT_USER 적게 하기
  // 있다면, CURRENT_USER 불러오고, input 안보이게 하기
  const currentUser = localStorage.getItem(LS.CURRENT_USER);
  if (currentUser === null) {
    askName();
  } else {
    fetchGreeting(currentUser);
  }
}
