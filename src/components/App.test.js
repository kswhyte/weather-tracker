/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import { fakeStore } from '../test/fakeStore';
import App from './App';
import HeaderContainer from '../containers/HeaderContainer';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div wrapper', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(wrapper.find(<HeaderContainer />)).toBe.true;
  });
});
