import React from "react";

export const TodoItem = ({
  index,
  todo,
  handleDelete,
  handleEdit,
  stylesChecked,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleCheck(index)}
      />
      <span
        style={stylesChecked(todo.checked)}
        onClick={() => toggleCheck(index)}
      >
        {todo.text}
      </span>
      <div>
        <button
          className="btn btn-danger me-2"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
        <button className="btn btn-warning" onClick={() => handleEdit(index)}>
          Edit
        </button>
      </div>
    </li>
  );
};
