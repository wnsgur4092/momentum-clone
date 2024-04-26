//toast.js

const SHOWING_TOAST = 'toast__active'; // 이 부분을 정확히 사용하도록 수정합니다.

export function toastOn(message) {
  const toastMessage = document.querySelector('.toast__message');
  if (!toastMessage) {
    console.error('Toast message element not found on the page.');
    return;
  }

  toastMessage.innerText = message;
  toastMessage.classList.add(SHOWING_TOAST); // SHOWING_TOAST 상수를 올바르게 사용합니다.

  toastMessage.addEventListener(
    'animationend',
    () => {
      toastMessage.classList.remove(SHOWING_TOAST);
    },
    { once: true }
  );
}
