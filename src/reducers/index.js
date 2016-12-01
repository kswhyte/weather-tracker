const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return {
        city: action.city,
        temp: action.temp,
        tempMin: action.tempMin,
        tempMax: action.tempMax,
        humidity: action.humidity,
        mainWeather: action.mainWeather,
        description: action.description,
        icon: action.icon,
        wind: action.wind
      }
    default:
      return state
  }
}

export default exampleReducer;
