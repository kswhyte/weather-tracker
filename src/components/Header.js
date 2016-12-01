import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <button>Settings</button>
        <h1> { this.props.city || 'City' } </h1>
        <button>DropDown</button>
      </div>
    );
  }
}

module.exports = Header;
