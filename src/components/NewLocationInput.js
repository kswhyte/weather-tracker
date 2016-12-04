import React, { Component } from 'react';
import { Link } from 'react-router';

import { fetchForecast } from '../actions/index';

const NewLocationInput = ({ onSubmit }) => {
  let input;
  // focus() {
  //   this.textInput.focus();
  // }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(input.value);
          input.value = '';
        }}
      >
        <input
          ref={(node) => { input = node; }}
          type="text"
          placeholder="Enter a City..."
        />
        <button
          className="add-city-button"
        >
          Pin New City
        </button>
        <Link to="/">
          <h1>View Pinned Cities</h1>
        </Link>
      </form>
    </div>
  );
};

module.exports = NewLocationInput;
