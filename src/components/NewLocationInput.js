import React, { Component } from 'react';
import { Link } from 'react-router';

const NewLocationInput = ({ onSubmit, pinCity, disabled }) => {
  let input;
  // focus() {
  //   this.textInput.focus();
  // }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ city: input.value });
          pinCity(input.value);
          input.value = '';
        }}
      >
        <input
          ref={(node) => { input = node; }}
          type="text"
          placeholder="Enter a City..."
        />
        <button
          type="submit"
          className="add-city-button"
          disabled={disabled}
        >
          Pin New City
        </button>
      </form>
    </div>
  );
};

module.exports = NewLocationInput;
