import React, { useState } from "react";
import UpdatedComponent from "./HOC";

const CounterOne = ({
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
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleDecrement}
      >
        Decrement
      </button>

      <button className="btn btn-danger" type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default UpdatedComponent(CounterOne);
