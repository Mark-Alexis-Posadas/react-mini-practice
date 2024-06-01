import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [modalEdit, setModalEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ index: null, text: "" });

  const handleAddTodo = () => {
    if (inputVal.trim() === "") {
      alert("please add todo");
      return;
    }
    setTodos([...todos, inputVal]);
    setInputVal("");
  };

  const handleDelete = (index) => {
    const deleteTodo = todos.filter((_, idx) => idx !== index);
    setTodos(deleteTodo);
  };

  const handleEdit = (index) => {
    setCurrentTodo({ index, text: todos[index] });
    setModalEdit(true);
  };

  const handleUpdate = () => {
    if (currentTodo.text.trim() === "") {
      alert("please enter a valid todo");
      return;
    }
    const updatedTodos = todos.map((todo, idx) =>
      idx === currentTodo.index ? currentTodo.text : todo
    );
    setTodos(updatedTodos);
    setModalEdit(false);
    setCurrentTodo({ index: null, text: "" });
  };

  return (
    <div className="max-w-[900px] m-auto relative">
      <div className="flex items-center justify-center m-10">
        <input
          type="text"
          className="border border-slate rounded bg-slate-50 p-2"
          placeholder="add todo"
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        <button
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-500"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      {todos.length <= 0 ? (
        "No todos left"
      ) : (
        <ul>
          {todos.map((item, index) => (
            <li
              key={index}
              className="border border-slate-50 rounded p-2 flex items-center justify-between bg-white shadow-md "
            >
              {item}
              <div className="flex items-center gap-3">
                <button
                  className="bg-blue-600 text-white rounded p-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white rounded p-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {modalEdit && (
        <div className="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center w-full bg-slate-200 h-full">
          <input
            type="text"
            className="bg-gray-500 rounded p-2 text-white w-full"
            placeholder="Edit Todo"
            onChange={(e) =>
              setCurrentTodo({ ...currentTodo, text: e.target.value })
            }
            value={currentTodo.text}
          />
          <button
            className="bg-blue-600 rounded p-2 text-white"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
