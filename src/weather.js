//weather.js

import { LS } from './constant/localStorage.js';

const weather = document.querySelector('.weather');
const temp = document.querySelector('.weather__temperature');
const location = document.querySelector('.weather__location');

const API_KEY = '47518a58b42dd5fa8d9d94f23bb7d94f';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

//TODO:
//1. 저장된 long & lat 있으면 2번 / 없다면 longitude & latitude를 localStorage에 저장
//2. 저장된 longitude & latitude 불러오기
//3. 불러온 long & lat에 맞는 날씨 불러오기
//4. 불러온 날씨 html에 뿌려주기

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
    const { latitude, longitude } = LS.COORDS;
    getWeather(latitude, longitude); // << 해야하는거
  }
}

// const API_KEY = '47518a58b42dd5fa8d9d94f23bb7d94f';

// export const success = (position) => {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   getWeather(latitude, longitude);
// };

// export const fail = () => {
//   alert('Unable to retrieve your location');
// };

// // const getWeather = (lat, lon) => {
// //   fetch(
// //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
// //   )
// //     .then((response) => response.json()) // Make sure to call json() as a function
// //     .then((data) => {
// //       displayWeather(data);
// //     })
// //     .catch((error) => {
// //       console.error('Failed to fetch weather data: ', error);
// //     });
// // };

// const getWeather = async (lat, lon) => {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//     );
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     displayWeather(data);
//   } catch (error) {
//     console.error('Failed to fetch weather data:', error);
//   }
// };

// const displayWeather = (data) => {
//   const { name } = data;
//   const { icon } = data.weather[0];
//   const { temp } = data.main;
//   const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

//   document.querySelector('.weather__icon').setAttribute('src', iconUrl);
//   document.querySelector('.weather__icon').setAttribute('alt', 'Weather Icon');
//   document.querySelector('.weather__temperature').textContent = `${Math.round(
//     temp
//   )}°C`;
//   document.querySelector('.weather__location').textContent = name;
// };
