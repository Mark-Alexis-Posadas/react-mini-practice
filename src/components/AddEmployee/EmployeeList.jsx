import { useReducer, useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";
import Table from "./Table";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  isToggle: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isToggle: !state.isToggle };
    default:
      return state;
  }
};

export const EmployeeList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="rounded bg-slate-50 shadow-lg p-10">
      <header>
        <h1 className="font-bold text-5xl">Employee List</h1>
        <button
          className="text-white rounded p-2 bg-blue-500 my-4"
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          Add Employee
        </button>
      </header>
      <Table />
      {state.isToggle && <AddEmployeeModal state={state} />}
      {/* {state <= 2 ? "" : <p>pagination</p>} */}
    </div>
  );
};
