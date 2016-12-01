import React from 'react';
import { shallow, mount } from 'enzyme';
import { describe, it, expect } from 'mocha';
import DropDownContainer from './DropDownContainer'

describe('DropDownContainer', () => {
  it('renders a list of cities', () => {
    const wrapper = shallow(
      <DropDownContainer
        locations={[
          { name: 'Denver' },
          { name: 'Boston' },
        ]}
      />,
    );
    expect(wrapper.find('.Locations').length).toEqual(2);
  });
});
