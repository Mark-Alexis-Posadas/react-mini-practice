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
          className={`text-white rounded p-2 bg-gray-600 ${
            color === "Green" && "bg-red-500 cursor-not-allowed"
          }`}
          onClick={() => handleClick(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
