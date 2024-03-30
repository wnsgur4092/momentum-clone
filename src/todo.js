export function setUpTodoForm() {
  const form = document.querySelector('.todo__form');
  const input = document.querySelector('.todo__input');
  const todoList = document.querySelector('.todo__container ul');

  //Fetch todo
  function fetchTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) ?? [];
    todos.forEach((todoText) => {
      addTodoList(todoText);
    });
  }

  //Add Todo item in Todo List
  function addTodoList(todoText) {
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    todoList.appendChild(todoItem);
  }

  // Todo form to Todo item
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = input.value;
    if (!todoText) return;

    addTodoList(todoText);
    input.value = '';

    const todos = JSON.parse(localStorage.getItem('todos')) ?? [];
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  fetchTodos();
}
