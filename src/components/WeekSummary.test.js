import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import WeekSummary from './WeekSummary';

describe('WeekSummary', () => {
  it('shoud render 5 <h4> tags', () => {
    const wrapper = shallow(
      <WeekSummary />,
    );
    expect(wrapper.find('.summary-data')).to.have.length(5);
  });

  it('should mount without props', () => {
    const wrapper = mount(
      <WeekSummary />,
    );
    expect(wrapper).to.have.length(1);
  });
});
