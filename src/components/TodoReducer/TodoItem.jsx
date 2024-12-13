import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TodoItem({
  item,
  handleDelete,
  handleEditTodo,
  isEditing,
}) {
  return (
    <li
      className={`${
        isEditing ? "bg-green-400 text-white focus" : "bg-white"
      } border border-slate-200 p-3 rounded flex items-center justify-between mb-3`}
    >
      {item}
      <div className="flex items-center gap-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
          onClick={handleEditTodo}
        >
          <FontAwesomeIcon icon={faPencilSquare} />
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold p-2  rounded"
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
