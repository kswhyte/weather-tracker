const App = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return {
        ...state,
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
    default:
      return state;
  }
};

export default App;
