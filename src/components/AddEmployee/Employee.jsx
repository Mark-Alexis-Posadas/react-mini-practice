import { useReducer } from "react";
import Modal from "./Modal";
import Table from "./Table";
import { ConfirmationDelete } from "./ConfirmationDelete";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  employeeTitle: "Add",
  isToggle: false,
  submittedData: [],
  isEditing: false,
  editIndex: null,
  isToggleDelete: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isToggle: !state.isToggle,
      };

    case "ADD_EMPLOYEE":
      return {
        ...state,
        [action.field]: action.value,
        isEditing: true,
        employeeTitle: "Add",
      };

    case "TOGGLE_CONFIRMATION_DELETE":
      return {
        ...state,
        isToggleDelete: true,
      };

    case "DELETE_EMPLOYEE":
      const { idx: deleteIdx } = action;
      return {
        ...state,
        submittedData: state.submittedData.filter((_, i) => i !== deleteIdx),
      };

    case "SET_EDIT_INDEX":
      const { idx } = action;
      const editedData = state.submittedData[idx];
      return {
        ...state,
        firstName: editedData.firstName,
        lastName: editedData.lastName,
        email: editedData.email,
        employeeTitle: "Edit",
        isToggle: true,
        isEditing: true,
        editIndex: idx,
      };

    case "SUBMIT_FORM":
      if (state.editIndex !== null) {
        const submittedData = [...state.submittedData];
        submittedData[state.editIndex] = { ...state };
        return {
          ...state,
          submittedData,
          firstName: "",
          lastName: "",
          email: "",
          editIndex: null,
          isToggle: false,
        };
      } else {
        return {
          ...state,
          submittedData: [...state.submittedData, { ...state }],
          firstName: "",
          lastName: "",
          email: "",
          isToggle: false,
        };
      }
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

  const toggleDelete = () => {
    dispatch({ type: "TOGGLE_CONFIRMATION_DELETE" });
  };

  const handleDelete = (idx) => {
    dispatch({ type: "DELETE_EMPLOYEE", idx });
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
      <Table
        dispatch={dispatch}
        state={state}
        handleDelete={handleDelete}
        toggleDelete={toggleDelete}
      />
      {state.isToggle && (
        <Modal
          employeeTitle={state.employeeTitle}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          state={state}
        />
      )}

      {state.isToggleDelete && <ConfirmationDelete />}
    </div>
  );
};

export default Employee;
