import React from 'react';
import { shallow, mount } from 'enzyme';

import { Provider } from 'react-redux';
import { fakeStore } from '../test/fakeStore';

import HeaderContainer from './HeaderContainer';

const setup = () => {
  const props = {
    city,
  };

  const wrapper = mount(
    // if you were to test your Provider or Container components you'd need the following
    <Provider store={fakeStore}>
      <HeaderContainer {...props} />
    </Provider>,
  );

  const Component = wrapper.find(city);

  return {
    props,
    Component,
  };
};


// <Header handleSubmit={props.handleSubmit} />
