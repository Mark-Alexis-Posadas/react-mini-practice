import React from "react";
import UseReducerObjects from "./UseReducerObjects";
const initialState = 0;
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.fuckingPayload;

    case "DECREMENT":
      return state - action.fuckingPayload;
  }
};

export default function UseReducer() {
  const [count, dispatch] = React.useReducer(reducerFunction, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", fuckingPayload: 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", fuckingPayload: 2 });
  };

  return (
    <div className="text-center mt-5">
      <h1>{count}</h1>
      <button className="btn btn-primary me-2" onClick={handleIncrement}>
        increment
      </button>
      <button className="btn btn-primary" onClick={handleDecrement}>
        decrement
      </button>

      {/* <UseReducerObjects /> */}
    </div>
  );
}
