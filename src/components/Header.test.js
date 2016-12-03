import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

describe('Header', () => {
  it('should render a Settings Button', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.settings-button')).to.have.length(1);
  });

  it('should render a default title of "City" in the <h1> tag', () => {
    const wrapper = shallow(
      <Header>
        <h1>City</h1>
      </Header>
    );
    expect(wrapper.text()).to.contain('City');
  });
});
