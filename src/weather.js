import { LS } from './constant/localStorage.js';

const weather = document.querySelector('.weather');
const temperature = document.querySelector('.weather__temperature');
const location = document.querySelector('.weather__location');
const icon = new Image(36, 36);
weather.prepend(icon);

const API_KEY = '47518a58b42dd5fa8d9d94f23bb7d94f';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

function getWeather(lat, lon) {
  fetch(`${BASE_URL}?APPID=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
      const temperatureData = Math.round(data.main.temp);
      const locationData = data.name;
      const iconNumber = data.weather[0].icon;
      const iconData = `https://openweathermap.org/img/wn/${iconNumber}@2x.png`;

      temperature.innerText = `${temperatureData}℃`;
      icon.src = iconData;
      location.innerText = locationData;
      weather.classList.add('visible'); // 날씨 정보를 불러오고 나서 visible 클래스를 추가합니다.
    })
    .catch(console.error);
}

function handleSuccess(position) {
  const positionObj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  localStorage.setItem(LS.COORDS, JSON.stringify(positionObj));
  getWeather(positionObj.latitude, positionObj.longitude);
}

function handleError() {
  console.error('Cannot access your location');
  const cachedCoords = localStorage.getItem(LS.COORDS);
  if (cachedCoords) {
    const { latitude, longitude } = JSON.parse(cachedCoords);
    getWeather(latitude, longitude);
  }
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
    timeout: 10000,
  });
}

export function displayWeather() {
  const cachedCoords = localStorage.getItem(LS.COORDS);
  if (cachedCoords) {
    const { latitude, longitude } = JSON.parse(cachedCoords);
    getWeather(latitude, longitude);
  } else {
    askCoords();
  }
}
