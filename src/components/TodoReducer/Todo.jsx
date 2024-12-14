import { useReducer, useState } from "react";
import TodoItem from "./TodoItem";
import { ConfirmationDelete } from "./ConfirmationDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a To-Do App", completed: false },
  { id: 3, text: "Deploy to Production", completed: false },
];

const initialState = {
  todo: initialTodos,
  currentTodo: "",
  currentId: null,
  deleteId: null,
  active: 0,
  showModal: false,
  toggleDelete: false,
  completed: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };

    case "TOGGLE_DELETE_TODO":
      return {
        ...state,
        toggleDelete: true,
        active: action.payload,
        deleteId: action.payload,
        currentTodo: state.todo[action.payload].text,
      };

    case "CONFIRM_DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((t) => t.id !== state.deleteId),
        toggleDelete: false,
        deleteId: null,
      };

    case "EDIT_TODO":
      return {
        ...state,
        active: action.idx,
        currentId: action.idx,
        currentTodo: action.item.text,
      };

    case "SUBMIT_EDIT":
      const updatedTodoList = [...state.todo];
      updatedTodoList[state.currentId] = state.currentTodo;

      return {
        ...state,
        todo: updatedTodoList,
        currentTodo: "",
        currentId: null,
      };

    case "CANCEL":
      return {
        ...state,
        showModal: false,
        active: null,
        currentTodo: "",
        currentId: null,
        toggleDelete: false,
      };

    case "SUBMIT_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
        active: null,
      };

    default:
      return state;
  }
};

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState(false);

  const handleToggleDelete = (id) => {
    dispatch({ type: "TOGGLE_DELETE_TODO", payload: id });
  };

  const handleConfirmDelete = () => {
    dispatch({ type: "CONFIRM_DELETE_TODO" });
  };

  const handleEditTodo = (id, item) => {
    dispatch({ type: "EDIT_TODO", idx: id, item });
  };

  const handleToggleComplete = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const handleSubmit = () => {
    if (inputVal.trim() === "") {
      setError(true);
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputVal,
      completed: false,
    };

    dispatch({ type: "SUBMIT_TODO", payload: newTodo });
    setInputVal("");
  };

  return (
    <div className="p-20 flex flex-col items-center relative max-w-[800px] m-auto">
      {error && <p className="text-red-500 mb-3">please add text</p>}
      <div className="flex items-center gap-3 w-full mb-3">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value), setError(false);
          }}
          placeholder="add todo..."
          className="border-b flex-1 border-slate-300 p-2 rounded text-4xl"
        />
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full w-20 h-20 "
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon={faPlus} className="text-2xl" />
        </button>
      </div>
      <ul className="w-full">
        {state.todo.map((item) => (
          <TodoItem
            item={item}
            key={item.id}
            handleToggleDelete={() => handleToggleDelete(item.id)}
            isEditing={state.active === item.id}
            handleEditTodo={() => handleEditTodo(item.id, item)}
            handleToggleComplete={handleToggleComplete}
          />
        ))}
      </ul>

      {state.toggleDelete && (
        <ConfirmationDelete
          itemToDelete={state.currentTodo}
          handleConfirmDelete={handleConfirmDelete}
          handleCancel={() => dispatch({ type: "CANCEL" })}
        />
      )}
    </div>
  );
}
