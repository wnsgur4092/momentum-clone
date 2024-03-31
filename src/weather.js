const API_KEY = '47518a58b42dd5fa8d9d94f23bb7d94f';

export const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  getWeather(latitude, longitude);
};

export const fail = () => {
  alert('Unable to retrieve your location');
};

// const getWeather = (lat, lon) => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
//   )
//     .then((response) => response.json()) // Make sure to call json() as a function
//     .then((data) => {
//       displayWeather(data);
//     })
//     .catch((error) => {
//       console.error('Failed to fetch weather data: ', error);
//     });
// };

const getWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
};

const displayWeather = (data) => {
  const { name } = data;
  const { icon } = data.weather[0];
  const { temp } = data.main;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  document.querySelector('.weather__icon').setAttribute('src', iconUrl);
  document.querySelector('.weather__icon').setAttribute('alt', 'Weather Icon');
  document.querySelector('.weather__temperature').textContent = `${Math.round(
    temp
  )}°C`;
  document.querySelector('.weather__location').textContent = name;
};
