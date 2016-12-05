/* eslint-disable */ 
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

describe('Header', () => {
  it('should render a Settings Button', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.settings-button')).to.have.length(1);
  });

  it('should render a DropDown Button', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.dropdown-button')).to.have.length(1);
  });

  it('should render a default title of "Current City" in the <h1> tag', () => {
    const wrapper = mount(
      <Header>
        <h1>Current City</h1>
      </Header>,
    );
    expect(wrapper.text()).to.contain('Current City');
  });
});
