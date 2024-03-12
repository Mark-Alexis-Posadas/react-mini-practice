import React from "react";

const buttonText = ["change first name", "change last name", "change age"];
const initialState = {
  firstName: "Mark Alexis",
  lastName: "Posadas",
  age: 29,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIRST_NAME": {
      return { ...state, firstName: action.payload };
    }
    case "CHANGE_LAST_NAME": {
      return { ...state, lastName: action.payload };
    }
    case "CHANGE_AGE": {
      return { ...state, age: action.payload };
    }
    default:
      return state;
  }
};

export default function UseReducerObjects() {
  const [currentState, dispatch] = React.useReducer(reducer, initialState);

  const handleClick = (type) => {
    switch (type) {
      case "CHANGE_FIRST_NAME":
        dispatch({ type, payload: "Juan" });
        break;
      case "CHANGE_LAST_NAME":
        dispatch({ type, payload: "TAMAD" });
        break;
      case "CHANGE_AGE":
        dispatch({ type, payload: 50 });
        break;
      default:
        break;
    }
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

      {buttonText.map((name, idx) => (
        <button
          className="btn btn-primary mx-2"
          key={idx}
          onClick={() => handleClick(name.toUpperCase())}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
