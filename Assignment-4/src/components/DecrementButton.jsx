// DecrementButton.jsx
import React from 'react';
import PropTypes from 'prop-types';

const DecrementButton = ({ decrement }) => {
  return <button onClick={decrement}>Decrement</button>;
};

DecrementButton.propTypes = {
  decrement: PropTypes.func.isRequired,
};

export default DecrementButton;
