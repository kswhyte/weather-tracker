import fetch from 'isomorphic-fetch';

export const receiveForecast = (forecastData) => {
  console.log(forecastData);
  return {
    type: 'RECEIVE_FORECAST',
    payload: forecastData,
    city: forecastData.timezone,
    temperature: forecastData.currently.temperature,
    summary: forecastData.currently.summary,
    humidity: forecastData.currently.humidity * 100,
    windSpeed: forecastData.currently.windSpeed,
    icon: forecastData.currently.icon,
  };
};

export const fetchForecast = (lat, lon) => ({ dispatch }) => {
  return fetch(`https://api.darksky.net/forecast/8f70b12ccfdc4a7de4a389f6b990d0fb/${lat},${lon}`)
    // .then(response => console.log(response))
    .then(forecastData => dispatch(receiveForecast(forecastData)));
};

// export function getSteps() {
//   return ({ fetch, dispatch }) => ({
//     type: 'GET_STEPS',
//     payload: {
//       promise: fetch('/steps/get').then(response => {
//         // we got data so we can populate other reducers
//         dispatch(populateStepOne(response.stepOne));
//         dispatch(populateStepTwo(response.stepTwo));
//       })
//     }
//   });
// }
