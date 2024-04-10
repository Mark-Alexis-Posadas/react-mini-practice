import React, { useState } from "react";

export default function HoverText() {
  const data = ["Blue", "Green", "Yellow"];

  const [value, setValue] = useState("Blue");

  const handleClick = (text) => {
    //If green do nothing or return nothing
    if (text === "Green") {
      return;
    }

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
