import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates RECEIVE_WEATHER_SUCCESS when receiveAPI is done' () => {
    nock('http://url.com/')
    get('./weather')
    reply(200, { city: { description: ['snow'] }})

    const expectedActions = [
      { type: types.RECEIVE_WEATHER_REQUEST },
      { type: types.RECEIVE_WEATHER_SUCCESS, body: { description: ['snow']}}
    ]
    const store = mockStore({ description: [] })

    return store.dispatch(actions.receiveAPI())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});
