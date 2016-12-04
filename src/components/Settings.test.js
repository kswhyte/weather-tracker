import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Settings from './Settings';


it('simulates click events', () => {
  const removeCity = sinon.spy();
  const props = { removeCity };
  const wrapper = shallow(
    <Settings
      removeCity={removeCity}
      {...props}
    />,
  );
  wrapper.find('button').simulate('click');
  expect(removeCity.calledOnce).to.equal(true);
});
