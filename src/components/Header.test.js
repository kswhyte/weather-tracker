import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';


describe('Header', () => {
  it('displays the title in an <h1> tag', () => {
    const wrapper = shallow(<Header />);
    const title = <h1>Hey!</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });
});
