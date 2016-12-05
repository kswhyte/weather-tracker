 /* eslint-disable */
import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { fakeStore } from '../test/fakeStore';
import Header from '../components/Header';

describe('HeaderContainer Container', () => {
  function setup() {
    const store = fakeStore({});
    const wrapper = mount(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    const Component = wrapper.find(Header);
    return {
      Component,
    };
  }

  it('should render HeaderContainer', () => {
    const { Component } = setup();
    expect(Component.length).toBeTruthy();
  });
});
