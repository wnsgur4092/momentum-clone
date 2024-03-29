// time.js
export function getCurrentDateTime() {
  const now = new Date();

  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

  // 로케일을 'en-US'로 설정하고, 위에서 정의한 옵션을 적용
  const date = now.toLocaleDateString('en-US', dateOptions).replace(/\//g, '.');
  const time = now.toLocaleTimeString('en-US', timeOptions);

  return { date, time };
}
