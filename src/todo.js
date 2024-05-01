import { LS } from './constant/localStorage.js';
import { toastOn } from './toast.js';

const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__list');

let todos = [];

export function initTodoApp() {
  todos = fetchTodos();
  renderTodos();
  todoForm.addEventListener('submit', handleTodoSubmit);
  todoList.addEventListener('change', handleCheckboxChange);
}

function saveTodos() {
  localStorage.setItem(LS.TODOS, JSON.stringify(todos));
}

function toggleDone(index) {
  const todo = todos[index];
  todo.done = !todo.done;
  const todoItem = todoList.children[index];
  todoItem.classList.toggle('done', todo.done);
  todo.done && toastOn('Great Job 👍');
}

function handleCheckboxChange(event) {
  if (event.target.type === 'checkbox') {
    const index = event.target.parentNode.dataset.index;
    toggleDone(index);
    saveTodos();
  }
}

function addTodoList(todo, index) {
  const todoItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.done;

  todoItem.dataset.index = index;
  todoItem.appendChild(checkbox);
  todoItem.append(todo.todo);
  todoItem.classList.toggle('done', todo.done);
  todoList.appendChild(todoItem);
}

function fetchTodos() {
  return JSON.parse(localStorage.getItem(LS.TODOS) ?? '[]');
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const currentTodo = todoInput.value.trim();
  if (!currentTodo) return;

  const newTodo = { todo: currentTodo, done: false };
  todos.push(newTodo);
  saveTodos();
  addTodoList(newTodo, todos.length - 1);
  todoInput.value = '';

  toastOn('New task added! 오늘도 화이팅 🔥');
}

function renderTodos() {
  todos.forEach(addTodoList);
}
