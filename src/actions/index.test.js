import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

// import * as actions from './index';
import { receiveAPI, RECEIVE_WEATHER } from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates RECEIVE_WEATHER when receiveAPI is done', () => {
    nock('http://www.example.com/')
    .get('./weather')
    .reply(200, {
      city: { description: ['snow'] },
    });

    const store = mockStore({ description: [] });


    const expectedActions = [
      { type: RECEIVE_WEATHER },
      { type: RECEIVE_WEATHER, city: { description: ['snow'] } },
    ];


    return store.dispatch(receiveAPI({ lat, lon, city }))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
});
