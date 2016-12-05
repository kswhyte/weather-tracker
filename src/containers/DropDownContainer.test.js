/* eslint-disable */
import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';
import { fakeStore } from '../test/fakeStore';
import DropDown from '../components/DropDown';

describe('DropDownContainer Container', () => {
  function setup() {
    const store = fakeStore({});
    const wrapper = mount(
      <Provider store={store}>
        <DropDown />
      </Provider>,
    );
    const Component = wrapper.find(DropDown);
    return {
      Component,
    };
  }
  it('should render DropDownContainer', () => {
    const { Component } = setup();
    expect(Component.length).toBeTruthy();
  });
});
