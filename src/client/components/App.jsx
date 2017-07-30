import React from 'react';
import PropTypes from 'prop-types';

require('../styles/app.scss');

const App = props => (
  <div>
    <p>Value: {props.value}</p>
    <button onClick={props.increment} value="Increment">Increment</button>
    <button onClick={props.decrement} value="Decrement">Decrement</button>
  </div>
);

App.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default App;
