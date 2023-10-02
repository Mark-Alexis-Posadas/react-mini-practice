import { useState, useEffect, useRef } from "react";
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
  //Show Modal
  const handleShow = () => {
    setShow(true);
  };
  //Close Modal
  const handleClose = () => {
    setShow(false);
  };

  //Add Task Button
  const handleAddTask = (e) => {
    e.preventDefault();
    // Check if the input value is empty
    if (inputRef.current.value.trim() === "") {
      alert("Add title");
      return; // Stop the function execution if the input is empty
    }
    const checked = selectedStatus === "Completed";
    const updatedVal = [...todos, { text: inputRef.current.value, checked }];

    setTodos(updatedVal);
    inputRef.current.value = "";
    handleClose();
  };

  //Delete Todos
  const handleDelete = (idx) => {
    const removeTodos = todos.filter((_, id) => id !== idx);
    setTodos(removeTodos);
  };

  //Edit Todos
  const handleEdit = (index) => {
    const editTodo = todos[index];
    setSelectedStatus(editTodo.checked ? "Completed" : "Incomplete");

    handleShow();
    setTodoTitle("Update Todo");
    setTitleInput(editTodo.text);

    const newBtns = modalButtons.map((b) => ({
      ...b,
      text: b.id === 1 ? "Update Task" : "Cancel",
    }));
    setModalButtons(newBtns);
  };

  //Toggle Check
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

  //handle Filter
  const handleFilter = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-between">
        <button className="btn btn-primary" onClick={handleShow}>
          Add Todo
        </button>
        <select
          className="form-select w-25"
          aria-label="Default select example"
          value={selectedStatus}
          onChange={handleFilter}
        >
          <option value="All">All</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="d-flex flex-column">
        {todos.length === 0 ? (
          <p className="h1">No Todos</p>
        ) : (
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
        handleClose={handleClose}
        handleAddTask={handleAddTask}
        inputRef={inputRef}
        todoTitle={todoTitle}
        modalButtons={modalButtons}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        titleInput={titleInput}
      />
    </div>
  );
};
