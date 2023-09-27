import React, { useState } from "react";

export default function FilterTaskList() {
  const taskList = [
    {
      taskName: "Task 1",
      completed: false,
    },
    {
      taskName: "Task 2",
      completed: true,
    },
    {
      taskName: "Task 3",
      completed: false,
    },
  ];

  // const [task, setTask] = useState(taskList);

  const incompleteTasks = taskList.filter((task) => !task.completed);
  return (
    <div>
      <h1>Task List Filter</h1>
      <ul>
        {incompleteTasks.map((task, idx) => (
          <li key={idx}>{task.taskName}</li>
        ))}
      </ul>
    </div>
  );
}
