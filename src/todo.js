//TODO.js

import { LS } from './constant/localStorage.js';

const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__container ul');

//TODO:
// 1. localStorage에 저장된 TODOS를 보이게 하기, 없다면 안보임
// 2. input을 localStorage에 저장
// 3. 1번 반복

function saveTodos(todo) {
  localStorage.setItem(LS.TODOS, JSON.stringify(todo));
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const currentTodo = todoInput.value.trim();
  if (!currentTodo) return;
  const existingTodos = JSON.parse(localStorage.getItem(LS.TODOS) || '[]');
  const updatedTodos = [...existingTodos, currentTodo];
  saveTodos(updatedTodos);
  addTodoList(currentTodo);
  todoInput.value = '';
}

function askTodo() {
  todoForm.addEventListener('submit', handleTodoSubmit);
}

function addTodoList(todo) {
  const todoItem = document.createElement('li');
  todoItem.textContent = todo;
  todoList.appendChild(todoItem);
}

export function displayTodos() {
  askTodo();
  const savedTodos = JSON.parse(localStorage.getItem(LS.TODOS)) ?? [];
  savedTodos.forEach(addTodoList);
}
