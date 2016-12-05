import React, { PropTypes } from 'react';

const NewLocationInput = ({ onSubmit, pinCity, disabled }) => {
  let input;

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

NewLocationInput.propTypes = {
  onSubmit: PropTypes.func,
  pinCity: PropTypes.func,
  disabled: PropTypes.bool,
};

module.exports = NewLocationInput;
