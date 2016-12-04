import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import NewLocationInputContainer from '../containers/NewLocationInputContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        { this.props.children }
      </div>
    );
  }
}

module.exports = App;
