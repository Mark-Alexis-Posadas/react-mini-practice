import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TodoItem({
  item,
  handleToggleDelete,
  handleEditTodo,
  isEditing,
  handleToggleComplete,
}) {
  return (
    <li
      className={`${
        isEditing ? "bg-green-400 text-white focus" : "bg-white"
      } border-b shadow-md border-slate-200 text-2xl p-3 rounded flex items-center justify-between mb-3`}
    >
      <div className="flex flex-col">
        <span
          className={`${item.completed ? "line-through" : ""}`}
          onClick={() => handleToggleComplete(item.id)}
          style={{ cursor: "pointer" }}
        >
          {item.text}
        </span>
        <span className="text-sm text-gray-500">{item.date}</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
          onClick={handleEditTodo}
        >
          <FontAwesomeIcon icon={faPencilSquare} />
        </button>

        <button
          className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold p-2  rounded"
          onClick={handleToggleDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
