import React, { useState } from "react";

const Counter = () => {
  const initialState = 1;
  const [count, setCount] = useState(initialState);
  return (
    <div className="mt-5">
      <h1 className="text-center display-4">Count - {count}</h1>

      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCount(count - 1)}
        >
          &minus;
        </button>
        <button
          type="button"
          className="ms-5 btn btn-primary"
          onClick={() => setCount(initialState)}
        >
          Reset
        </button>
        <button
          type="button"
          className="ms-5 btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          &#43;
        </button>
      </div>
    </div>
  );
};

export default Counter;
