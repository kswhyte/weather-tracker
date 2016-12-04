import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <div>
          <button className="settings-button">Settings</button>
          </div>
          <h1 className="location-name"> { this.props.city || 'City' } </h1>
          <div>
          <button className="dropdown">DropDown</button>
          </div>
      </header>
      </div>
    );
  }
}

module.exports = Header;
