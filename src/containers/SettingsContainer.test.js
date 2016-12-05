 /* eslint-disable */
import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { fakeStore } from '../test/fakeStore';
import Settings from '../components/Settings';

describe('Settings Container', () => {
  function setup() {
    const store = fakeStore({});
    const wrapper = mount(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );
    const Component = wrapper.find(Settings);
    return {
      Component,
    };
  }
  it('should render Settings container', () => {
    const { Component } = setup();
    expect(Component.length).toBeTruthy();
  });
});
