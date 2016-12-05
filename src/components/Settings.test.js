/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Settings from './Settings';
import { Provider } from 'react-redux';
import { fakeStore } from '../test/fakeStore';

describe('Settings', () => {
  it('should mount without props', () => {
    const wrapper = shallow(<Settings />);
  expect(wrapper.length).toBe(1);
  });

  it('should call removeCity once when the button is clicked', () => {
    const removeCity = sinon.spy();
    const wrapper = shallow(
      <Settings
        removeCity={removeCity}
        pinnedCities={['denver']}
      />,
    );
    wrapper.find('button').simulate('click');
    expect(removeCity.calledOnce).toBe(true);
  });

})
