import { LS } from './constant/localStorage.js';
import { toastOn } from './toast.js';

const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__container ul');

let todos = []; // 전역 투두 배열

export function initTodoApp() {
  todos = fetchTodos(); // 초기 투두 목록 로드
  renderTodos(); // DOM에 투두 목록 렌더링
  todoForm.addEventListener('submit', handleTodoSubmit);
  todoList.addEventListener('change', handleCheckboxChange); // 이벤트 위임을 사용하여 체크박스 변경 처리
}

function saveTodos() {
  localStorage.setItem(LS.TODOS, JSON.stringify(todos));
}

function toggleDone(index) {
  todos[index].done = !todos[index].done;
  saveTodos();
  updateTodoItem(index); // 특정 투두 아이템만 업데이트

  // 체크박스가 선택될 때만 토스트 메시지 표시
  if (todos[index].done) {
    toastOn('Great Job 👍');
  }
}

function handleCheckboxChange(event) {
  if (event.target.type === 'checkbox') {
    const index = Array.from(todoList.children).indexOf(
      event.target.parentNode
    );
    toggleDone(index);
  }
}

function addTodoList(todo, index) {
  const todoItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.done;
  checkbox.dataset.index = index; // 체크박스에 인덱스를 저장

  todoItem.appendChild(checkbox);
  todoItem.append(todo.todo);
  todoItem.classList.toggle('done', todo.done);
  todoList.appendChild(todoItem);
}

function fetchTodos() {
  return JSON.parse(localStorage.getItem(LS.TODOS) || '[]');
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const currentTodo = todoInput.value.trim();
  if (!currentTodo) return;

  const newTodo = { todo: currentTodo, done: false };
  todos.push(newTodo);
  saveTodos();
  addTodoList(newTodo, todos.length - 1); // 새로운 투두 추가
  todoInput.value = '';

  toastOn('New task added! 오늘도 화이팅 🔥'); // 토스트 메시지 추가
}

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach(addTodoList);
}

function updateTodoItem(index) {
  const todoItem = todoList.children[index];
  const todo = todos[index];
  todoItem.classList.toggle('done', todo.done); // 상태에 따라 클래스 토글
}

function loadTodos() {
  const savedTodos = fetchTodos();
  todos = savedTodos.length ? savedTodos : [];
}
