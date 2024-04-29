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
  form.classList.remove(SHOWING_CLASS);
  greeting.classList.add(SHOWING_CLASS);
  todos.classList.add(SHOWING_CLASS);
  greeting.innerText = `Hello, ${name}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  fetchGreeting(currentValue);
  savedName(currentValue);
}

function askName() {
  form.classList.add(SHOWING_CLASS);
  form.addEventListener('submit', handleSubmit);
}

export function showGreeting() {
  const currentUser = localStorage.getItem(LS.CURRENT_USER);
  if (currentUser === null) {
    askName();
  } else {
    fetchGreeting(currentUser);
  }
}
