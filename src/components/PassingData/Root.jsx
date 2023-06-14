import React from "react";

const TODOS = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];

const Root = () => {
  return <TodoList data={TODOS} />;
};

const TodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const TodoItem = ({ item }) => {
  return (
    <li>
      {item.task} {item.completed.toString()}
    </li>
  );
};

export default Root;
