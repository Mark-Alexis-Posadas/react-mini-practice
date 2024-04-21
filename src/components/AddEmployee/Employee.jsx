import { useReducer } from "react";
import AddEmployeeModal from "./AddEmployeeModal";
import Table from "./Table";

const initialState = {
  firstName: "",
  lastName: "",
  employeeTitle: "Add",
  email: "",
  isToggle: false,
  submittedData: [],
  isEditing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isToggle: !state.isToggle,
      };

    case "ADD_EMPLOYEE":
      return { ...state, [action.field]: action.value };

    case "EDIT_EMPLOYEE":
      const { index } = action;
      const editedEmployee = state.submittedData[index];
      return {
        ...state,
        isToggle: !state.isToggle,
        employeeTitle: "Edit",
        firstName: editedEmployee.firstName,
        lastName: editedEmployee.lastName,
        email: editedEmployee.email,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        submittedData: [...state.submittedData, { ...state }],
        isToggle: !state.isToggle,
        firstName: "",
        lastName: "",
        email: "",
      };
    default:
      return state;
  }
};

const Employee = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClose = (e) => {
    e.preventDefault();
    dispatch({ type: "TOGGLE" });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ADD_EMPLOYEE", field: name, value: value });
  };

  const handleSubmit = (e) => {
    if (!state.firstName || !state.lastName || !state.email) {
      alert("Please enter all required data.");
      e.preventDefault();
      return;
    }

    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  return (
    <div className="rounded bg-slate-50 p-10">
      <header>
        <h1 className="font-bold text-5xl">Employee List</h1>
        <button
          className="text-white rounded p-2 bg-blue-500 my-4"
          onClick={() => dispatch({ type: "TOGGLE" })}
        >
          Add Employee
        </button>
      </header>
      <Table dispatch={dispatch} state={state} />
      {state.isToggle && (
        <AddEmployeeModal
          employeeTitle={state.employeeTitle}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          state={state}
        />
      )}
    </div>
  );
};

export default Employee;
