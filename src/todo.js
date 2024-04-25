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
  const newTodo = { todo: currentTodo, done: false };
  const updatedTodos = [...existingTodos, newTodo];
  saveTodos(updatedTodos);
  addTodoList(newTodo, existingTodos.length);
  todoInput.value = '';
}

function askTodo() {
  todoForm.addEventListener('submit', handleTodoSubmit);
}

function toggleDone(index) {
  const todos = JSON.parse(localStorage.getItem(LS.TODOS));
  todos[index].done = !todos[index].done;
  saveTodos(todos);

  const todoItem = todoList.children[index];
  if (todos[index].done) {
    todoItem.style.textDecoration = 'line-through';
  } else {
    todoItem.style.textDecoration = 'none';
  }
}

function addTodoList(todo, index) {
  const todoItem = document.createElement('li');
  todoItem.style.textAlign = 'left';
  // 체크박스
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.done;
  checkbox.onchange = () => toggleDone(index);

  todoItem.appendChild(checkbox);
  todoItem.append(todo.todo);
  todoList.appendChild(todoItem);

  if (todo.done) {
    todoItem.style.textDecoration = 'line-through';
  }
}

export function displayTodos() {
  askTodo();
  const savedTodos = JSON.parse(localStorage.getItem(LS.TODOS)) ?? [];
  savedTodos.forEach(addTodoList);
}
