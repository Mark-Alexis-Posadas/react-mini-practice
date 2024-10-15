import { useReducer, useState } from "react";
import TodoItem from "./TodoItem";
import { ConfirmationDelete } from "./ConfirmationDelete";

const initialState = {
  todo: [],
  currentTodo: "",
  currentIndex: null,
  deleteIndex: null,
  active: 0,
  showModal: false,
  toggleDelete: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DELETE_TODO":
      return {
        ...state,
        toggleDelete: true,
        deleteIndex: action.payload,
      };

    case "CONFIRM_DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((_, idx) => idx !== state.deleteIndex),
        toggleDelete: false,
        deleteIndex: null,
      };

    case "EDIT_TODO":
      return {
        ...state,
        active: action.idx,
        currentIndex: action.idx,
        currentTodo: action.item,
        showModal: true,
      };

    case "HANDLE_EDIT_CHANGE":
      return { ...state, currentTodo: action.payload };

    case "SUBMIT_EDIT":
      const updatedTodoList = [...state.todo];
      updatedTodoList[state.currentIndex] = state.currentTodo;
      return {
        ...state,
        todo: updatedTodoList,
        currentTodo: "",
        currentIndex: null,
      };

    case "CANCEL":
      return {
        ...state,
        showModal: false,
        active: null,
        currentTodo: "",
        currentIndex: null,
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

  const handleEditChange = (e) => {
    dispatch({ type: "HANDLE_EDIT_CHANGE", payload: e.target.value });
  };

  const handleDelete = (index) => {
    dispatch({ type: "TOGGLE_DELETE_TODO", payload: index });
  };

  const handleConfirmDelete = () => {
    dispatch({ type: "CONFIRM_DELETE_TODO" });
  };

  const handleSubmit = () => {
    if (inputVal.trim() === "") {
      setError(true);
      return;
    }

    dispatch({ type: "SUBMIT_TODO", payload: inputVal });
    setInputVal("");
  };

  const handleEditTodo = (index, item) => {
    dispatch({ type: "EDIT_TODO", idx: index, item });
  };

  return (
    <div className="p-20 flex flex-col items-center relative">
      {error && <p className="text-red-500 mb-3">please add text</p>}
      <div className="flex items-center gap-3 w-full mb-3">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value), setError(false);
          }}
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
            handleEditTodo={() => handleEditTodo(index, item)}
          />
        ))}
      </ul>
      {state.showModal && (
        <div className="fixed bg-[rgba(0,0,0,0.4)] w-full h-screen top-0 flex items-center overflow-hidden">
          <div className="max-w-[1000px] m-auto flex w-full gap-3">
            <input
              type="text"
              placeholder="Edit..."
              className="border flex-1 border-slate-300 p-3 rounded"
              value={state.currentTodo}
              onChange={handleEditChange}
            />
            <div className="flex items-center gap-3">
              <button
                className="text-white p-3 rounded bg-red-600"
                onClick={() => dispatch({ type: "CANCEL" })}
              >
                Cancel
              </button>
              <button
                className="text-white p-3 rounded bg-blue-600"
                onClick={() => {
                  dispatch({ type: "SUBMIT_EDIT" });
                  dispatch({ type: "CANCEL" });
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {state.toggleDelete && (
        <ConfirmationDelete
          handleConfirmDelete={handleConfirmDelete}
          handleCancel={() => dispatch({ type: "CANCEL" })}
        />
      )}
    </div>
  );
}
