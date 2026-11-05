import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createCounter } from '../services/counterService';

const Counter = ({ initialValue = 0 }) => {
  const [counter] = useState(() => createCounter(initialValue));
  const [value, setValue] = useState(counter.getValue());

  return (
    <div data-testid="counter-container" className="counter-box">
      <h2>Contador TDD</h2>
      <span data-testid="counter-value">{value}</span>
      <div>
        <button onClick={() => setValue(counter.increment())}>Incrementar</button>
        <button onClick={() => setValue(counter.decrement())}>Decrementar</button>
        <button onClick={() => setValue(counter.reset())}>Resetar</button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number
};

export default Counter;
