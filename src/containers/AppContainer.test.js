import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { fakeStore } from '../test/fakeStore';
import App from '../components/App';

describe('AppContainer Container', () => {
  function setup() {
    const store = fakeStore({});
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const Component = wrapper.find(App);
    return {
      Component,
    };
  }
  it('should render AppContainer', () => {
    const { Component } = setup();
    expect(Component.length).toBeTruthy();
  });
});
