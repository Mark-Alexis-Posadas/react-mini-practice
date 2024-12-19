import { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [allTodos, setAllTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a To-Do App", completed: false },
    { id: 3, text: "Deploy to Production", completed: true },
  ]);

  const [todos, setTodos] = useState(allTodos);

  const [todoId, setTodoId] = useState(null);
  const [isTodos, setIsTodos] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleStatus = (status) => {
    if (status === "completed") {
      setTodos(allTodos.filter((todo) => todo.completed));
    } else if (status === "inprogress") {
      setTodos(allTodos.filter((todo) => !todo.completed));
    } else {
      setTodos(allTodos);
    }
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setTodoId(id);

    const currentTodo = allTodos.find((todo) => todo.id === id);

    setInputValue(currentTodo.text);
  };

  const handleToggleDelete = (id) => {
    setTodoId(id);
    setIsDelete(true);
  };

  const handleConfirmDelete = () => {
    const updatedTodos = allTodos.filter((todo) => todo.id !== todoId);
    setAllTodos(updatedTodos);
    setTodos(updatedTodos);
    setIsDelete(false);
  };

  const handleCancelDelete = () => {
    setTodoId(null);
    setIsDelete(false);
  };

  const handleIsComplete = (id) => {
    const updatedTodos = allTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setAllTodos(updatedTodos);
    setTodos(updatedTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setIsTodos(true);
      return;
    }

    if (isEditing) {
      const updatedTodos = allTodos.map((todo) =>
        todo.id === todoId ? { ...todo, text: inputValue } : todo
      );
      setAllTodos(updatedTodos);
      setTodos(updatedTodos);
      setTodoId(null);
    } else {
      const todoItem = {
        text: inputValue,
        id: allTodos.length + 1,
        completed: false,
      };
      const updatedTodos = [...allTodos, todoItem];
      setAllTodos(updatedTodos);
      setTodos(updatedTodos);
    }

    setInputValue("");
    setIsEditing(false);
  };

  return (
    <div className="p-10 bg-slate-50 shadow-custom-shadow rounded flex flex-col justify-center items-center max-w-[1000px] m-auto">
      {isDelete && (
        <div className="w-full flex items-center flex-col">
          <div className="flex items-center gap-2">
            Are you sure you want to delete
            <span className="text-bold text-4xl block">
              "{allTodos.find((todo) => todo.id === todoId)?.text}"
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="text-green-600" onClick={handleConfirmDelete}>
              Yes
            </button>
            <button className="text-red-600" onClick={handleCancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <ul className="flex items-center gap-4 mb-5">
        <li
          className="text-sm text-green-600 cursor-pointer"
          onClick={() => handleStatus("inprogress")}
        >
          In Progress
        </li>
        <li
          className="text-sm text-red-600 cursor-pointer"
          onClick={() => handleStatus("completed")}
        >
          Completed
        </li>
        <li
          className="text-sm text-blue-600 cursor-pointer"
          onClick={() => handleStatus("all")}
        >
          All
        </li>
      </ul>

      <ul className="bg-white p-3 rounded w-full">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between gap-4 bg-slate-100 p-3 rounded w-full mb-3"
          >
            <span
              onClick={() => handleIsComplete(todo.id)}
              className={`${
                todo.completed ? "text-red-600 line-through" : ""
              } ${todo.id === todoId ? "text-green-600" : ""}`}
            >
              {todo.text}
            </span>

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleEdit(todo.id)}
                type="button"
                className="text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleToggleDelete(todo.id)}
                type="button"
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isTodos && (
        <p className="text-red-500">Please add text in the input fields...</p>
      )}
      <form onSubmit={handleSubmit} className="flex items-center gap-4 w-full">
        <input
          type="text"
          value={inputValue}
          placeholder="Add todo..."
          onChange={(e) => {
            setInputValue(e.target.value), setIsTodos(false);
          }}
          className="bg-white text-xl flex-1 p-3 rounded"
        />
        <button className="bg-indigo-600 rounded p-3 text-white" type="submit">
          {isEditing ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};
