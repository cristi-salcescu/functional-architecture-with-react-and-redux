import axios from 'axios';

const apiKey = '086d3cb81928ff1e11b103230f316dd8';
const baseUrl = 'http://api.openweathermap.org/data/2.5';

function fetchCityWeather(cityName){
  const url = `${baseUrl}/weather?q=${cityName}&APPID=${apiKey}`;
  return axios.get(url);
}

export { fetchCityWeather };
