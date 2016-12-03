import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import App from './App';
import HeaderContainer from '../containers/HeaderContainer';

// describe('App', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//   });
//
//   it('renders without crashing', () => {
//     shallow(<App />);
//   });
//
//   it('contains the HeaderContainer', () => {
//     const wrapper = mount(<App />);
//     expect(wrapper.find(HeaderContainer).length).toEqual(1);
//   });
// });
