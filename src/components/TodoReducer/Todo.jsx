import { useReducer, useState } from "react";
import TodoItem from "./TodoItem";
const initialState = {
  todo: [],
  active: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
        active: null,
      };

    case "DELETE_TODO":
      const { payload: index } = action;
      return { ...state, todo: state.todo.filter((_, idx) => idx !== index) };

    case "EDIT_TODO":
      return { ...state, active: action.payload };
    default:
      return state;
  }
};
export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputVal, setInputVal] = useState("");

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_TODO", payload: inputVal });
    setInputVal("");
  };

  const handleEditTodo = (index) => {
    dispatch({ type: "EDIT_TODO", payload: index });
    setInputVal(state.todo[index]);
  };

  return (
    <div className="p-20 flex flex-col items-center">
      <div className="flex items-center gap-3 w-full mb-3">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="add todo..."
          className="border flex-1 border-slate-300 p-3 rounded"
        />
        <button
          className="bg-green-600 text-white rounded p-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <ul className="w-full">
        {state.todo.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            index={index}
            handleDelete={() => handleDelete(index)}
            isEditing={state.active === index}
            handleEditTodo={() => handleEditTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}
