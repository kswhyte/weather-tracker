import fetch from 'isomorphic-fetch';
import { isUndefined } from 'lodash';


const receiveAPI = ({ endpoint, city, lat, lon, action }) => {
  return dispatch =>
    fetch(`http://api.openweathermap.org/data/2.5/${endpoint}?${!isUndefined(city) ? ('q=' + city) : ''}${!isUndefined(lat) ? ('lat=' + lat + '&lon=' + lon) : ''}&units=imperial&APPID=9b829427a8de3cc61102432f7b62fd6d`) // eslint-disable-line
    .then(response => response.json())
    .then(
      json => dispatch({ type: action, json }),
      err => dispatch({ type: `${action}_ERROR`, err }),
    );
};

export const fetchForecast = ({ lat, lon, city }) => {
  return (dispatch) => {
    return Promise.all([
      dispatch(receiveAPI({ lat, lon, city, endpoint: 'weather', action: 'RECEIVE_WEATHER' })),
      dispatch(receiveAPI({ lat, lon, city, endpoint: 'forecast', action: 'RECEIVE_FORECAST' })),
      dispatch(receiveAPI({ lat, lon, city, endpoint: 'forecast/daily', action: 'RECEIVE_DAILY' })),
    ]);
  };
};

export const pinCity = (city) => {
  return {
    type: 'PIN_CITY',
    city,
  };
};

export const removeCity = (city) => {
  return {
    type: 'REMOVE_CITY',
    city,
  };
};
