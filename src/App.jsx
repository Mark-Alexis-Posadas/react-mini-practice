import { useEffect, useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isTodos, setIsTodos] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [todoId, setTodoId] = useState(null);

  const handleEdit = (id) => {
    setIsEditing(true);
    setTodoId(id);
    const currentTodo = [...todos];
    const c = currentTodo[id - 1].text;
    setInputValue(c);
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  const handleIsComplete = (id) => {
    // setTodos((prev) =>
    //   prev.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setIsTodos(true);
      return;
    }

    if (isEditing) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === todoId ? { ...todo, text: inputValue } : todo
        )
      );
      setTodoId(null);
    } else {
      const todoItem = {
        text: inputValue,
        id: todos.length + 1,
        completed: false,
      };
      setTodos((prev) => [...prev, todoItem]);
    }

    setInputValue("");
    setIsEditing(false);
  };

  return (
    <div className="p-10 bg-slate-50 shadow-custom-shadow rounded flex flex-col justify-center items-center max-w-[1000px] m-auto">
      <p>are you sure to delete this item?</p>
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
                edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                type="button"
                className="text-red-600"
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isTodos && (
        <p className="text-red-500">please add text on the input fields...</p>
      )}
      <form onSubmit={handleSubmit} className="flex items-center gap-4 w-full">
        <input
          type="text"
          value={inputValue}
          placeholder="add todo.."
          onChange={(e) => {
            setInputValue(e.target.value), setIsTodos(false);
          }}
          className="bg-white text-xl flex-1 p-3 rounded"
        />
        <button className="bg-indigo-600 rounded p-3 text-white" type="submit">
          {isEditing ? "update" : "submit"}
        </button>
      </form>
    </div>
  );
};

export default App;
