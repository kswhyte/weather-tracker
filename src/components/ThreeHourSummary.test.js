import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ThreeHourSummary from './ThreeHourSummary';

describe('ThreeHourSummary', () => {
  it('should receive data as props from the Store', () => {

  });
  it('shoud render 4 <h4> tags', () => {
    const wrapper = shallow(
      <ThreeHourSummary />
    );
    expect(wrapper.find('.summary-data')).to.have.length(4)
  });
});
