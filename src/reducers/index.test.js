 /* eslint-disable */
import reducer from './index';

const mockData = {
  coord: {
    lon: -104.98,
    lat: 39.74,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 51.21,
    pressure: 1012,
    humidity: 16,
    temp_min: 46.4,
    temp_max: 55.4,
  },
  visibility: 16093,
  wind: {
    speed: 16.11,
    deg: 300,
    gust: 11.8,
  },
  clouds: {
    all: 1,
  },
  dt: 1480880100,
  sys: {
    type: 1,
    id: 602,
    message: 0.1589,
    country: 'US',
    sunrise: 1480860364,
    sunset: 1480894518,
  },
  id: 5419384,
  name: 'Denver',
  cod: 200,
};

describe('APPreducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should return a new state when given the RECEIEVE_WEATHER action type', () => {
    const initialState = {};

    const action = {
      type: 'RECEIVE_WEATHER',
      json: mockData,
    };

    const expectedForecest = {
      city: 'Denver',
      description: 'clear sky',
      humidity: 16,
      icon: '01d',
      loading: false,
      mainWeather: 'Clear',
      temp: 51.21,
      tempMax: 55.4,
      tempMin: 46.4,
      wind: 16.11,
    };
    expect(reducer(initialState, action)).toEqual(expectedForecest);
  });
});
