import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TodoItem({
  item,
  index,
  active,
  handleDelete,
  handleEditTodo,
}) {
  return (
    <li
      className={`${
        index === active ? "bg-green-200" : "bg-white"
      } border border-slate-200 p-3 rounded flex items-center justify-between mb-3`}
    >
      {item}
      <div className="flex items-center gap-3">
        <button onClick={handleEditTodo}>
          <FontAwesomeIcon icon={faPencilSquare} />
        </button>

        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
