import React from "react";

const initialState = {
  firstName: "Mark Alexis",
  lastName: "Posadas",
  age: 29,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIRST_NAME": {
      return { ...state, firstName: action.payFuckingLoad };
    }
    case "CHANGE_LAST_NAME": {
      return { ...state, lastName: action.payFuckingLoad };
    }
    case "CHANGE_AGE": {
      return { ...state, age: action.payFuckingLoad };
    }
    default:
      return state;
  }
};

export default function UseReducerObjects() {
  const [currentState, dispatch] = React.useReducer(reducer, initialState);

  const handleFirstNameChange = () => {
    // You can pass the new value as payload
    dispatch({ type: "CHANGE_FIRST_NAME", payFuckingLoad: "Juan" });
  };

  const handleLastNameChange = () => {
    dispatch({ type: "CHANGE_LAST_NAME", payFuckingLoad: "TAMAD" });
  };

  const handleAgeChange = () => {
    dispatch({ type: "CHANGE_AGE", payFuckingLoad: 50 });
  };

  return (
    <div>
      <ul>
        <li>
          <p>First Name: {currentState.firstName}</p>
          <p>Last Name: {currentState.lastName}</p>
          <p>Age: {currentState.age}</p>
        </li>
      </ul>

      <button className="btn btn-primary" onClick={handleFirstNameChange}>
        Change first name
      </button>

      <button className="btn btn-primary" onClick={handleLastNameChange}>
        Change last name
      </button>

      <button className="btn btn-primary" onClick={handleAgeChange}>
        Change age
      </button>
    </div>
  );
}
