import React from "react";
import ToggleItem from "./ToggleItem";

const ToggleMultipleElements = () => {
  const data = [
    { id: 1, description: "First item", active: true },
    { id: 2, description: "Second item", active: false },
    { id: 3, description: "Third item", active: false },
  ];

  return (
    <>
      {data.map((d) => {
        const { id, description, active } = d;
        return (
          <ToggleItem key={id} description={description} active={active} />
        );
      })}
    </>
  );
};

export default ToggleMultipleElements;
