const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return {
        type: 'RECEIVE_FORECAST',
        payload: action.payload,
        city: action.city,
        temperature: action.temperature,
        summary: action.summary,
        humidity: action.humidity * 100,
        windSpeed: action.windSpeed,
        icon: action.icon,
      };
    default:
      return state;
  }
};

export default exampleReducer;
