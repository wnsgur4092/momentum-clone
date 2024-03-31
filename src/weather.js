const API_KEY = '47518a58b42dd5fa8d9d94f23bb7d94f';

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
};

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en&exclude=current`
  )
    .then((response) => {
      return response.json;
    })
    .then((json) => {
      console.log(json);
    });
};
