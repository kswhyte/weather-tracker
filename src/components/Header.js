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
      <div>
        <Link to="/settings">
          <button className="settings-button">Settings</button>
        </Link>
        <Link to={`/weather/${this.props.city}`}>
          <h1> { this.props.city || 'Current City' } </h1>
        </Link>
        <button
          className="dropdown-button"
          onClick={() =>
            this.setState({
              hideDropDown: !this.state.hideDropDown,
            })}
        >
            DropDown
          </button>
        {this.state.hideDropDown && (<DropDown pinnedCities={this.props.pinnedCities} />)}
      </div>
    );
  }
}

Header.propTypes = {
  city: PropTypes.string,
  pinnedCities: PropTypes.arr,
};

module.exports = Header;
