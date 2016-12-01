import React from 'react';
import { shallow, mount } from 'enzyme';
import { describe, it, expect } from 'mocha';
import sinon from 'sinon';
import App from './App';

describe('App', () => {
  it('contains the HeaderContainer', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(HeaderContainer).length).toEqual(1);
  });
});
