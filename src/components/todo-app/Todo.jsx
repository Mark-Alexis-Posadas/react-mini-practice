import React from "react";
import { TodoModal } from "./TodoModal";

export const Todo = () => {
  const inputRef = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const [todos, setTodos] = React.useState([]);
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleTitleChange = (e) => {
    const result = e.target.value;
    console.log(result);
  };

  const handleAddTask = () => {
    // const result = e.target.value;
    const updatedVal = [...todos, inputRef.current.value];
    setTodos(updatedVal);
    inputRef.current.value = "";
    handleClose();
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-between">
        <button className="btn btn-primary" onClick={handleShow}>
          Add Todo
        </button>
        {/* Use value prop instead of selected */}
        <select
          className="form-select w-25"
          aria-label="Default select example"
          defaultValue="All"
        >
          <option value="All">All</option>
          <option value="1">Incomplete</option>
          <option value="2">Completed</option>
        </select>
      </div>
      <ul className="list-group mt-4">
        {todos.map((todo, idx) => (
          <li className="list-group-item" key={idx}>
            {todo}
          </li>
        ))}
      </ul>
      <TodoModal
        show={show}
        close={handleClose}
        handleTitleChange={handleTitleChange}
        handleAddTask={handleAddTask}
        inputRef={inputRef}
      />
    </div>
  );
};
