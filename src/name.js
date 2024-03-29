//name.js

export function setUpGreetingForm() {
  const form = document.querySelector('.greeting__form');
  const input = document.querySelector('.greeting__input');
  const greetingMessage = document.querySelector('.greeting__message');

  const savedName = localStorage.getItem('name');
  if (savedName) {
    greetingMessage.textContent = `Hello, ${savedName}`;
    form.style.display = 'none';
    greetingMessage.style.display = 'block';
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault(); //
    const name = input.value;
    greetingMessage.textContent = `Hello, ${name}`;
    form.style.display = 'none';
    greetingMessage.style.display = 'block';
  });
}
