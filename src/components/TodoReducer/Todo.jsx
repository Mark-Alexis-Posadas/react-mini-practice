import { useReducer, useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { ConfirmationDelete } from "./ConfirmationDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";

// Initial state of the Todo list
const initialTodos = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
    date: new Date().toLocaleString(),
  },
  {
    id: 2,
    text: "Build a To-Do App",
    completed: false,
    date: new Date().toLocaleString(),
  },
  {
    id: 3,
    text: "Deploy to Production",
    completed: false,
    date: new Date().toLocaleString(),
  },
];

const initialState = {
  todo: initialTodos,
  currentTodo: "",
  currentId: null,
  deleteId: null,
  active: 0,
  showModal: false,
  toggleDelete: false,
  isEditing: false,
  completed: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CANCEL":
      return {
        ...state,
        showModal: false,
        active: null,
        currentTodo: "",
        currentId: null,
        toggleDelete: false,
        isEditing: false, // Reset edit mode on cancel
      };

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
        active: action.payload.id,
        deleteId: action.payload.id,
        currentTodo: action.payload.text,
      };

    case "CONFIRM_DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((t) => t.id !== state.deleteId),
        toggleDelete: false,
        deleteId: null,
        currentTodo: "",
        active: null, // Reset active when deletion is confirmed
      };

    case "EDIT_TODO":
      return {
        ...state,
        active: action.idx,
        currentId: action.idx,
        currentTodo: action.item.text,
        isEditing: true,
      };

    // Update Todo item when editing
    case "SUBMIT_EDIT":
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === state.currentId
            ? { ...todo, text: state.currentTodo } // Update the text of the edited todo
            : todo
        ),
        currentTodo: "", // Clear input after edit
        currentId: null,
        active: null, // Reset active once editing is done
        isEditing: false, // Reset edit mode
      };

    case "SUBMIT_TODO":
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        date: new Date().toLocaleString(),
      };
      return {
        ...state,
        todo: [...state.todo, newTodo],
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

  // Sync inputVal with currentTodo when in editing mode
  useEffect(() => {
    if (state.isEditing) {
      setInputVal(state.currentTodo);
    } else {
      setInputVal(""); // Clear input when not editing
    }
  }, [state.isEditing, state.currentTodo]);

  const handleToggleDelete = (id, item) => {
    dispatch({
      type: "TOGGLE_DELETE_TODO",
      payload: item,
    });
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

    if (state.isEditing) {
      // Submit the edit action
      dispatch({ type: "SUBMIT_EDIT" });
    } else {
      const newTodo = {
        id: Date.now(),
        text: inputVal,
        completed: false,
      };
      // Add new Todo
      dispatch({ type: "SUBMIT_TODO", payload: newTodo });
    }

    setInputVal(""); // Clear input after submitting
  };

  return (
    <div className="p-20 flex flex-col items-center relative max-w-[800px] m-auto">
      {error && <p className="text-red-500 mb-3">Please add text</p>}
      <div className="flex items-center gap-3 w-full mb-3">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
            setError(false);
          }}
          placeholder="Add todo..."
          className="border-b flex-1 border-slate-300 p-2 rounded text-4xl"
        />
        <button
          className={`${
            state.isEditing
              ? "bg-green-500 hover:bg-green-700"
              : "bg-purple-500 hover:bg-purple-700"
          } text-white font-bold py-2 px-4 rounded-full w-20 h-20`}
          onClick={handleSubmit}
        >
          <FontAwesomeIcon
            icon={state.isEditing ? faSave : faPlus}
            className="text-2xl"
          />
        </button>
      </div>
      <ul className="w-full">
        {state.todo.length === 0 ? (
          <p>No todo left</p>
        ) : (
          state.todo.map((item) => (
            <TodoItem
              item={item}
              key={item.id}
              handleToggleDelete={() => handleToggleDelete(item.id, item)}
              isEditing={state.active === item.id}
              handleEditTodo={() => handleEditTodo(item.id, item)}
              handleToggleComplete={handleToggleComplete}
            />
          ))
        )}
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
