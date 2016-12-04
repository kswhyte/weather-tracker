import { pull, take, flattenDeep } from 'lodash';

const App = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return {
        ...state,
        fullDay: take(action.json.list, 8),
      };

    case 'RECEIVE_WEATHER':
      return {
        ...state,
        city: action.json.name,
        temp: action.json.main.temp,
        tempMin: action.json.main.temp_min,
        tempMax: action.json.main.temp_max,
        humidity: action.json.main.humidity,
        mainWeather: action.json.weather[0].main,
        description: action.json.weather[0].description,
        icon: action.json.weather[0].icon,
        wind: action.json.wind.speed,
      };

    case 'RECEIVE_DAILY':
      return {
        ...state,
        fullWeek: take(action.json.list, 7),
      };

    case 'PIN_CITY':
      return {
        ...state,
        pinnedCities: flattenDeep([state.pinnedCities && [...state.pinnedCities], action.city]),
      };

    case 'REMOVE_CITY':
      return {
        ...state,
        pinnedCities: pull([...state.pinnedCities], action.city),
      };

    default:
      return state;
  }
};

export default App;
