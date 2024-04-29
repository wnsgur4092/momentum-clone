//toast.js

const SHOWING_TOAST = 'toast__active';

export function toastOn(message) {
  const toastMessage = document.querySelector('.toast__message');
  if (!toastMessage) {
    console.error('Toast message element not found on the page.');
    return;
  }

  toastMessage.innerText = message;
  toastMessage.classList.add(SHOWING_TOAST);

  toastMessage.addEventListener(
    'animationend',
    () => {
      toastMessage.classList.remove(SHOWING_TOAST);
    },
    { once: true }
  );
}
