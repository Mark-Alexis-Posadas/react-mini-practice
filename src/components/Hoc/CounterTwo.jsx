import React, { useState } from "react";
import UpdatedComponent from "./HOC";

const CounterTwo = ({
  counter,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onMouseOver={handleIncrement}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onMouseOver={handleDecrement}
      >
        Decrement
      </button>

      <button
        className="btn btn-danger"
        type="button"
        onMouseOver={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default UpdatedComponent(CounterTwo);
