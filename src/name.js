//name.js

export function setUpGreetingForm() {
  const form = document.querySelector('.greeting__form');
  const input = document.querySelector('.greeting__input');
  const greetingMessage = document.querySelector('.greeting__message');

  const savedName = window.localStorage.getItem('name');
  if (savedName) {
    displayGreeting(savedName);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = input.value.trim();
    if (!name) return;
    window.localStorage.setItem('name', name);
    displayGreeting(name);
  });

  function displayGreeting(name) {
    greetingMessage.textContent = `Hello, ${name}`;
    form.style.display = 'none';
    greetingMessage.style.display = 'block';
  }
}
