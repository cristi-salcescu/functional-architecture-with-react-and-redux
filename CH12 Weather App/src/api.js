import axios from 'axios';

const API_KEY = '086d3cb81928ff1e11b103230f316dd8';

function fetchCityWeather(cityName){
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`;
  return axios.get(url);
}

export { fetchCityWeather };
