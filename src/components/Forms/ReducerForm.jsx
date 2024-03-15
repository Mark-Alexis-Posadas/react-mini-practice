import React, { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
  gender: "",
  submittedData: null,
  theme: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        submittedData: { ...state },
      };
    case "TOGGLE_THEME":
      return { ...state, theme: !state.theme };
    default:
      return state;
  }
}

export default function ReducerForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value: value,
    });
  };

  const handleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  return (
    <div
      className={`min-h-screen grid grid-cols-2 gap-9 p-10 ${
        state.theme ? "bg-black" : "bg-white"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center flex-col mb-3">
          <label className="text-purple-700">First Name:</label>
          <input
            className="w-full p-2 bg-white shadow-md"
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
        <div className="flex justify-center flex-col mb-3">
          <label className="text-purple-700">Last Name:</label>
          <input
            className="w-full p-2 bg-white shadow-md"
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <div className="flex justify-center flex-col mb-3">
          <label className="text-purple-700">Email:</label>
          <input
            className="w-full p-2 bg-white shadow-md"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="flex justify-center flex-col mb-3">
          <label className="text-purple-700">User Name:</label>
          <input
            className="w-full p-2 bg-white shadow-md"
            type="text"
            name="userName"
            value={state.userName}
            onChange={handleChange}
            placeholder="User Name"
          />
        </div>
        <div className="flex justify-center flex-col mb-3">
          <label className="text-purple-700">Password:</label>
          <input
            className="w-full p-2 bg-white shadow-md"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center flex-col mb-3">
          <label className="text-purple-700">Confirm Password:</label>
          <input
            className="w-full p-2 bg-white shadow-md"
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <h1>Gender</h1>
          <ul className="flex item-center my-3">
            <li className="flex-items-center mr-2">
              <input
                className="mr-2"
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <label className="text-purple-700">Male</label>
            </li>
            <li className="flex-items-center">
              <input
                className="mr-2"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <label className="text-purple-700"> Female</label>
            </li>
          </ul>
        </div>
        <button className="text-white bg-purple-600 rounded p-2">Submit</button>
      </form>
      <div className="flex flex-col items-end">
        <button
          className="bg-purple-700 rounded p-2 text-white"
          onClick={handleTheme}
        >
          {state.theme ? "Toggle Light" : "Toggle Dark"}
        </button>
        {state.submittedData && (
          <ul className="w-full">
            <li className="mb-3">
              First Name: {state.submittedData.firstName}
            </li>
            <li className="mb-3">Last Name: {state.submittedData.lastName}</li>
            <li className="mb-3">Email: {state.submittedData.email}</li>
            <li className="mb-3">User Name: {state.submittedData.userName}</li>
            <li className="mb-3">Password: {state.submittedData.password}</li>
            <li className="mb-3">
              Confirm Password: {state.submittedData.confirmPassword}
            </li>
            <li className="mb-3">Gender: {state.submittedData.gender}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
