import React, { useState } from "react";

export default function HoverText() {
  const data = ["Blue", "Green", "Yellow"];

  const [value, setValue] = useState("Blue");

  const handleClick = (text) => {
    setValue(text);
  };

  return (
    <div className="container mt-5">
      <div>{value}</div>

      {data.map((color, idx) => (
        <button
          key={idx}
          type="button"
          className="btn btn-primary me-2"
          onClick={() => handleClick(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
