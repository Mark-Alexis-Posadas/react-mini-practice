import React, { useState, useEffect, useRef } from "react";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";
import { ConfirmDelete } from "./ConfirmDelete";

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

export const TodoList = () => {
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
      return (
        storedTodos || [
          { text: "Add todo", checked: false },
          { text: "fuckers", checked: false },
        ]
      );
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
    setTodoTitle("Add Todo");
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
      return;
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
      setIndexToUpdate(null);
    }

    setTitleInput("");
    setModalSelectedStatus("Incomplete");
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
                <TodoItem
                  stylesChecked={stylesChecked}
                  key={index}
                  todo={todo}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  toggleCheck={toggleCheck}
                  index={index}
                />
              ) : null;
            })}
          </ul>
        )}
      </div>
      <AddTodo
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

      <ConfirmDelete />
    </div>
  );
};
