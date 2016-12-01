import fetch from 'isomorphic-fetch';

export const receiveForecast = (forecastData) => {
  console.log(forecastData, 'forecast data');
  return {
    type: 'RECEIVE_FORECAST',
    payload: forecastData,
    city: forecastData.city.name,
    temp: forecastData.list.main.temp,
    tempMin: forecastData.list.main.temp_min,
    tempMax: forecastData.list.main.temp_max,
    humidity: forecastData.list.main.humidity,
    mainWeather: forecastData.list.weather.main,
    description: forecastData.list.weather.description,
    icon: forecastData.list.weather.icon,
    wind: forecastData.list.wind.speed,
  };
};

export const fetchForecast = (lat, lon) => {
  return (dispatch) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&APPID=9b829427a8de3cc61102432f7b62fd6d`)
    .then(response => response.json())
    .then(response => console.log(response));
    // .then(forecastData => dispatch(receiveForecast(forecastData)))
    // .catch(error => console.log(error));
  };
};
