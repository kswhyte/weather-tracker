import fetch from 'isomorphic-fetch';

const receiveAPI = ({ endpoint, lat, lon, city, action }) => {
  return dispatch =>
    fetch(`http://api.openweathermap.org/data/2.5/${endpoint}?lat=${lat}&lon=${lon}&units=imperial&APPID=9b829427a8de3cc61102432f7b62fd6d`)
    .then(response => response.json())
    .then(
      json => dispatch({ type: action, json }),
      err => dispatch({ type: `${action}_ERROR`, err }),
    );
};

export const fetchForecast = (lat, lon) => {
  return (dispatch) => {
    return Promise.all([
      dispatch(receiveAPI({ lat, lon, endpoint: 'weather', action: 'RECEIVE_WEATHER' })),
      dispatch(receiveAPI({ lat, lon, endpoint: 'forecast', action: 'RECEIVE_FORECAST' })),
      dispatch(receiveAPI({ lat, lon, endpoint: 'forecast/daily', action: 'RECEIVE_DAILY' })),
    ]);
  };
};
