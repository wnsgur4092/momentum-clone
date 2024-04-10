export function setUpTodoForm() {
  const form = document.querySelector('.todo__form');
  const input = document.querySelector('.todo__input');
  const todoList = document.querySelector('.todo__container ul');

  //Fetch todo
  function fetchTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) ?? [];
    todos.forEach((todoText, index) => {
      addTodoList(todoText, index);
    });
  }

  //Add Todo item in Todo List
  function addTodoList(todoText, index) {
    const todoItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', () => removeTodo(index));

    todoItem.textContent = todoText;
    todoItem.insertBefore(checkbox, todoItem.firstChild);
    todoList.appendChild(todoItem);
  }

  // Remove Todo items in List
  function removeTodo(index) {
    let todos = JSON.parse(localStorage.getItem('todos')) ?? [];
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoList.innerHTML = '';
    fetchTodos();
  }

  const add = 1;

  // Todo form to Todo item
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = input.value.trim();
    if (!todoText) return;

    const todos = JSON.parse(localStorage.getItem('todos')) ?? [];
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = '';
    todoList.innerHTML = '';
    fetchTodos();
  });

  fetchTodos();
}
