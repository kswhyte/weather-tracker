import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import CurrentWeather from './CurrentWeather';
import WeatherSummary from './WeatherSummary';


describe('CurrentWeather', () => {
  it('should render the WeatherSummary component', () => {
    const wrapper = mount(<CurrentWeather />);
    expect(wrapper.find(<WeatherSummary />)).to.equal(true);
  });

  it('should render the Full Day button', () =>{
    const wrapper = mount(
      <CurrentWeather />,
    );
    expect(wrapper.text()).to.contain('Show Full Day Forecast');
  });

  it('calls componentWillMount', () => {
    sinon.spy(CurrentWeather.prototype, 'componentWillMount');
    const wrapper = mount(<CurrentWeather />);
    expect(CurrentWeather.prototype.componentWillMount.calledOnce).to.equal(true);
  });
});
