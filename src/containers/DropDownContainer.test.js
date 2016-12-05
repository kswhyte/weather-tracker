import React from 'react';
import { shallow, mount } from 'enzyme';
import DropDownContainer from './DropDownContainer';

describe('DropDownContainer', () => {
  it('renders a list of cities', () => {
    const wrapper = shallow(
      <DropDownContainer />,
    );
    expect(wrapper.find('.locations').length).toEqual(2);
  });
});
