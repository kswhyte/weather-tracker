import fetch from 'isomorphic-fetch';

const receiveForecast = (lat, lon) => {
  return dispatch =>
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&APPID=9b829427a8de3cc61102432f7b62fd6d`)
    .then(response => response.json())
    .then(
      json => dispatch({ type: 'RECEIVE_FORECAST', json }),
      err => dispatch({ type: 'RECEIVE_FORECAST_ERROR', err }),
    );
};

const receiveWeather = (lat, lon) => {
  return dispatch =>
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=9b829427a8de3cc61102432f7b62fd6d`)
    .then(response => response.json())
    .then(
      json => dispatch({ type: 'RECEIVE_WEATHER', json }),
      err => dispatch({ type: 'RECEIVE_WEATHER_ERROR', err }),
    );
};

export const fetchForecast = (lat, lon) => {
  return (dispatch) => {
    return Promise.all([
      dispatch(receiveWeather(lat, lon)),
      dispatch(receiveForecast(lat, lon)),
    ]);
  };
};
