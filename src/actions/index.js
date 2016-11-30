export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

export const receiveForecast = (forecastData) => {
  console.log('pong')
  return ({
  // action object
  });
};

export const fetchForecast = (lat, lon) => {
  console.log('ping')
  console.log(lat, lon);
  return (dispatch) => {
    return {}
  }
};
