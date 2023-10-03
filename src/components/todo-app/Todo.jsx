import React, { useState, useEffect, useRef } from "react";
import { TodoModal } from "./TodoModal";

export const Todo = () => {
  const buttons = [
    {
      id: 1,
      text: "Add Task",
    },
    {
      id: 2,
      text: "Cancel",
    },
  ];

  const inputRef = useRef(null);
  const [show, setShow] = useState(false);
  const [todoTitle, setTodoTitle] = useState("Add Todo");
  const [modalButtons, setModalButtons] = useState(buttons);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [titleInput, setTitleInput] = useState("");
  const [indexToUpdate, setIndexToUpdate] = useState(null);
  const [modalSelectedStatus, setModalSelectedStatus] = useState("Incomplete");

  const [todos, setTodos] = useState(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      return storedTodos || [{ text: "Add todo", checked: false }];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    // Save todos to local storage whenever todos change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Show Modal
  const handleShow = () => {
    setShow(true);
  };

  // Close Modal
  const handleClose = () => {
    setShow(false);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    setTitleInput(e.target.value);
  };

  // Add Task Button
  const handleAddTask = () => {
    // Check if the input value is empty
    if (titleInput.trim() === "") {
      alert("Add title");
      return; // Stop the function execution if the input is empty
    }

    if (todoTitle === "Add Todo") {
      const checked = modalSelectedStatus === "Completed";
      const updatedTodos = [...todos, { text: titleInput, checked }];
      setTodos(updatedTodos);
    } else if (todoTitle === "Update Todo" && indexToUpdate !== null) {
      const updatedTodos = [...todos];
      updatedTodos[indexToUpdate].text = titleInput;
      updatedTodos[indexToUpdate].checked = modalSelectedStatus === "Completed";
      setTodos(updatedTodos);
      setIndexToUpdate(null); // Reset the index after updating
    }

    setTitleInput("");
    setModalSelectedStatus("Incomplete"); // Reset the modal selected status to "Incomplete"
    handleClose();
  };

  // Delete Todos
  const handleDelete = (idx) => {
    const removeTodos = todos.filter((_, id) => id !== idx);
    setTodos(removeTodos);
  };

  // Edit Todos
  const handleEdit = (index) => {
    const editTodo = todos[index];
    setModalSelectedStatus(editTodo.checked ? "Completed" : "Incomplete");
    setIndexToUpdate(index);
    handleShow();
    setTodoTitle("Update Todo");
    setTitleInput(editTodo.text);

    const newBtns = modalButtons.map((b) => ({
      ...b,
      text: b.id === 1 ? "Update Task" : "Cancel",
    }));
    setModalButtons(newBtns);
  };

  // Toggle Check
  const toggleCheck = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const stylesChecked = (isChecked) => ({
    textDecoration: isChecked ? "line-through" : "none",
    color: isChecked ? "#888" : "#222",
  });

  // Handle Filter
  const handleFilter = (event) => {
    const newSelectedStatus = event.target.value;
    setSelectedStatus(newSelectedStatus);

    const filteredTodos = todos.filter((todo) => {
      if (newSelectedStatus === "All") {
        return true;
      } else if (newSelectedStatus === "Completed") {
        return todo.checked;
      } else if (newSelectedStatus === "Incomplete") {
        return !todo.checked;
      }
      return false;
    });

    // Check if there are no todos for the selected filter
    if (filteredTodos.length === 0) {
      alert("No Todos for the selected filter");
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-between">
        <button className="btn btn-primary" onClick={handleShow}>
          Add Todo
        </button>
        <label htmlFor="filter" className="w-25">
          Filter
          <select
            className="form-select w-100"
            aria-label="Default select example"
            value={selectedStatus}
            onChange={handleFilter}
            id="filter"
          >
            <option value="All">All</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
      </div>

      <div className="d-flex flex-column">
        {todos.length === 0 && (
          <p className="h1">No Todos for the selected filter</p>
        )}
        {todos.length > 0 && (
          <ul className="list-group mt-4">
            {todos.map((todo, index) => {
              const isVisible =
                selectedStatus === "All" ||
                (selectedStatus === "Completed" && todo.checked) ||
                (selectedStatus === "Incomplete" && !todo.checked);

              return isVisible ? (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => toggleCheck(index)}
                  />
                  <span
                    style={stylesChecked(todo.checked)}
                    onClick={() => toggleCheck(index)}
                  >
                    {todo.text}
                  </span>
                  <div>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </div>
                </li>
              ) : null;
            })}
          </ul>
        )}
      </div>
      <TodoModal
        show={show}
        handleInputChange={handleInputChange}
        handleClose={handleClose}
        handleAddTask={handleAddTask}
        inputRef={inputRef}
        todoTitle={todoTitle}
        modalButtons={modalButtons}
        selectedStatus={modalSelectedStatus}
        setSelectedStatus={setModalSelectedStatus}
        titleInput={titleInput}
      />
    </div>
  );
};
