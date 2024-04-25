//weather.js

import { LS } from './constant/localStorage.js';

const weather = document.querySelector('.weather');
const temperature = document.querySelector('.weather__temperature');
const location = document.querySelector('.weather__location');

const API_KEY = '47518a58b42dd5fa8d9d94f23bb7d94f';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

//TODO:
//1. 저장된 long & lat 있으면 2번 / 없다면 longitude & latitude를 localStorage에 저장
//2. 저장된 longitude & latitude 불러오기 ✅
//3. 불러온 long & lat에 맞는 날씨 불러오기
//4. 불러온 날씨 html에 뿌려주기

function getWeather(lat, lon) {
  fetch(
    `${BASE_URL}?APPID=${API_KEY}&lat=${lat}&lon=${lon}&units=metric&exclude=current`
  )
    .then((res) => res.json())
    .then((data) => {
      const temperatureData = Math.round(data.main.temp);
      const locationData = data.name;
      const iconNumber = data.weather[0].icon;
      const iconData = `https://openweathermap.org/img/wn/${iconNumber}@2x.png`;
      const icon = new Image(36, 36);

      temperature.innerText = `${temperatureData}℃`;
      icon.src = iconData;
      weather.prepend(icon);
      location.innerText = `${locationData}`;
    })
    .catch(console.error);
}

function handleSuccess(position) {
  const positionObj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  localStorage.setItem(LS.COORDS, JSON.stringify(positionObj));
}

function handleError() {
  console.error('Cannot access your location');
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

export function displayWeather() {
  const locations = localStorage.getItem(LS.COORDS);
  if (locations === null) {
    askCoords(); // << 해야하는거
  } else {
    const { latitude, longitude } = JSON.parse(locations);
    getWeather(latitude, longitude); // << 해야하는거
  }
}
