import React, { useEffect, useState } from "react";

const Counter = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(initialState);
  };
  return (
    <div className="mt-5">
      <h1 className="text-center display-4">Count - {count}</h1>

      <div className="d-flex justify-content-center">
        <button
          type="button"
          className={`btn ${count > 0 ? "btn-primary" : "btn-secondary"}`}
          onClick={handleDecrement}
        >
          &minus;
        </button>
        <button
          type="button"
          className="ms-5 btn btn-primary"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="button"
          className={`btn ms-5 ${count < 10 ? "btn-primary" : "btn-secondary"}`}
          onClick={handleIncrement}
        >
          &#43;
        </button>
      </div>
    </div>
  );
};

export default Counter;
