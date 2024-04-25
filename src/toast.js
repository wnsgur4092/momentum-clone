//toast.js

export function toastOn(message) {
  const toastMessage = document.querySelector('.toast__message');
  if (!toastMessage) {
    console.error('Toast message element not found on the page.');
    return;
  }

  toastMessage.innerText = message;
  toastMessage.classList.add('active');

  setTimeout(function () {
    toastMessage.classList.remove('active');
  }, 2000);
}
