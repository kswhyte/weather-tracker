/* eslint-disable */ 
import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { fakeStore } from '../test/fakeStore';
import CurrentWeather from '../components/CurrentWeather';

describe('Current Weather Container', () => {
  function setup() {
    const store = fakeStore({});
    const wrapper = mount(
      <Provider store={store}>
        <CurrentWeather />
      </Provider>,
    );
    const Component = wrapper.find(CurrentWeather);
    return {
      Component,
    };
  }
  it('should render Current Weather component', () => {
    const { Component } = setup();
    expect(Component.length).toBeTruthy();
  });
});
