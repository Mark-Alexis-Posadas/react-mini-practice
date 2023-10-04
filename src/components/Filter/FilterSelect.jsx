import React from "react";

export const FilterSelect = () => {
  const data = [
    {
      task: "Task Completed",
      status: true,
    },
    {
      task: "Task Incomplete",
      status: false,
    },
  ];

  const [tasks, setTasks] = React.useState(data);
  const [selectedStatus, setSelectedStatus] = React.useState("All");

  function handleChange(e) {
    const filterTarget = e.target.value;
    setSelectedStatus(filterTarget);
    const filteredTasks = data.filter((task) => {
      if (filterTarget === "All") {
        return true; // Return true for all tasks
      } else if (filterTarget === "Incomplete") {
        return !task.status;
      } else if (filterTarget === "Completed") {
        return task.status;
      }

      //OR
      // else if (
      //   (filterTarget === "Incomplete" && !task.status) ||
      //   (filterTarget === "Completed" && task.status)
      // ) {
      //   return true; // Return true for tasks that match the selected status
      // }
      return false; // Return false for tasks that don't match the selected status
    });

    setTasks(filteredTasks);
  }

  function handleDelete(index) {
    const removeTodos = tasks.filter((_, idx) => idx !== index);
    setTasks(removeTodos);
  }

  return (
    <div className="container mt-5">
      <label htmlFor="filter">Filter</label>

      <select
        aria-label="Default select example"
        id="filter"
        className="form-select"
        value={selectedStatus}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Completed">Completed</option>
      </select>

      <ul className="list-group mt-3">
        {tasks.length === 0 && <p>No todos</p>}
        {tasks.map((task, idx) => (
          <li
            className="list-group-item d-flex align-items-center justify-content-between"
            key={idx}
          >
            {task.task}
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(idx)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
