const App = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return {
        ...state,
        city: action.json.city.name,
        temp: action.json.list[0].main.temp,
        tempMin: action.json.list[0].main.temp_min,
        tempMax: action.json.list[0].main.temp_max,
        humidity: action.json.list[0].main.humidity,
        mainWeather: action.json.list[0].weather[0].main,
        description: action.json.list[0].weather[0].description,
        icon: action.json.list[0].weather[0].icon,
        wind: action.json.list[0].wind.speed,
      };
    case 'RECEIVE_WEATHER':
      console.log('action.json in RECEIVE_WEATHER reducer', action.json);
      return {
        ...state,
        json: action.json,
      };
    default:
      return state;
  }
};

export default App;
