//TODO.js

import { LS } from './constant/localStorage.js';
import { toastOn } from './toast.js';

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

function toggleDone(index) {
  const todos = JSON.parse(localStorage.getItem(LS.TODOS));
  todos[index].done = !todos[index].done;
  saveTodos(todos);

  const todoItem = todoList.children[index];
  if (todos[index].done) {
    todoItem.style.textDecoration = 'line-through';
    toastOn('Great Job 👍');
  } else {
    todoItem.style.textDecoration = 'none';
  }
}

function addTodoList(todo, index) {
  const todoItem = document.createElement('li');
  // 체크박스
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.done;
  checkbox.onchange = () => toggleDone(index);

  todoItem.appendChild(checkbox);
  todoItem.append(todo.todo);
  todoList.appendChild(todoItem);

  // todo.done이 true면 line-through 유지
  if (todo.done) {
    todoItem.style.textDecoration = 'line-through';
  }
}

function fetchTodos() {
  return JSON.parse(localStorage.getItem(LS.TODOS) || '[]');
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const currentTodo = todoInput.value.trim();
  if (!currentTodo) return;

  //전에 저장된 todos에 새로운 todo를 저장하기
  const existingTodos = fetchTodos();
  const newTodo = { todo: currentTodo, done: false }; //'done' 초기값은 false, 체크시 true로 바뀜
  const updatedTodos = [...existingTodos, newTodo]; // newTodo 를 전에 todos에 append 하는 방식
  saveTodos(updatedTodos);
  addTodoList(newTodo, existingTodos.length);
  todoInput.value = ''; // submit 시 input 초기화

  toastOn('New task added! 오늘도 화이팅 🔥');
}

function askTodo() {
  todoForm.addEventListener('submit', handleTodoSubmit);
}

export function displayTodos() {
  askTodo(); // "오늘 할일은 무엇인가?" 하고 빈칸 보여주기, 입력이 들어오고 submit을 하면 LS에 저장
  const savedTodos = fetchTodos(); // 입력전에 일단 전에 저장되었던 투두 아이템들을 보여줘야하므로, LS에서 저장된 todos 가져오기
  savedTodos.forEach(addTodoList); // todos -> todo로 해서 보여주기
}
