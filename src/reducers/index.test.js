import reducer from './index';
import * as actions from '../actions/index';

describe('APPreducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should return a new state when given the RECEIEVE_WEATHER action type', () => {
    const initialState = {
      city: 'Denver',
      temp: 32,
      description: 'snow',
    };
    const action = {
      type: 'RECEIEVE_WEATHER',
      city: initialState.city,
      temp: initialState.temp,
      description: initialState.description,
    };
    const expectedForecest = {
      city: 'Denver',
      temp: 32,
      description: 'snow',
    };
    expect(reducer(initialState, action)).toEqual(expectedForecest);
  });
});
