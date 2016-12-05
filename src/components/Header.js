import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import DropDown from './DropDown';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      hideDropDown: true,
    };
  }

  render() {
    return (
      <div className="main-header">
        <Link to="/settings">
          <button className="settings-button">Settings</button>
        </Link>
        <Link to={`/weather/${this.props.city}`}>
          <h1 className="location-name"> { this.props.city || 'Current City' } </h1>
        </Link>
        <button
          className="dropdown-button"
          onClick={() =>
            this.setState({
              hideDropDown: !this.state.hideDropDown,
            })}
        >
            Pinned Cities
          </button>
        {this.state.hideDropDown && (<DropDown pinnedCities={this.props.pinnedCities} />)}
      </div>
    );
  }
}

Header.propTypes = {
  city: PropTypes.string,
  pinnedCities: PropTypes.func,
};

module.exports = Header;
