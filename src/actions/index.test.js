/* eslint-disable */ 
import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  receiveAPI, RECEIVE_WEATHER,
  fetchForecast, RECEIVE_FORECAST,
  pinCity, PIN_CITY,
  removeCity, REMOVE_CITY,
} from './index';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  function success() {
    return {
      type: 'RECEIVE_WEATHER',
    };
  }

  function fetchData() {
    return dispatch => {
      return fetch('http://api.openweathermap.org')
        .then(() => dispatch(success()));
    };
  }

  it('should execute fetch data', () => {
    const store = mockStore({});
    return store.dispatch(fetchData())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(success())
    });
  });

  it('should create an action to pin a city', () => {
    const city = 'miami';
    const expectedAction = {
      type: 'PIN_CITY',
      city,
    };
  expect(pinCity(city)).toEqual(expectedAction);
  });

  it('should create an action to remove a city', () => {
    const city = 'raleigh';
    const expectedAction = {
      type: 'REMOVE_CITY',
      city,
    };
  expect(removeCity(city)).toEqual(expectedAction);
  });
});
