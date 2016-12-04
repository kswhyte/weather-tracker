import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/settings">
          <button>Settings</button>
        </Link>
        <h1> { this.props.city || 'Current City' } </h1>
        <button>DropDown</button>
      </div>
    );
  }
}

module.exports = Header;
