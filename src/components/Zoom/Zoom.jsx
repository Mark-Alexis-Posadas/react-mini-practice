import { useState } from "react";

const Zoom = () => {
  const [size, setSize] = useState("1rem");

  const handleClick = (index) => {
    if (index === 0) {
      setSize(`${parseInt(size) + 10}rem`);
    } else {
      setSize(`${parseInt(size) - 10}rem`);
    }
  };

  const colors = ["red", "blue", "green", "orange", "purple"]; // Array of colors for each letter

  return (
    <div className="mt-6 text-center">
      {/* Wrap each letter in a span and Zoomly styles */}
      <h1 className="mb-2 font-bold" style={{ fontSize: size }}>
        {"hello".split("").map((letter, index) => (
          <span key={index} style={{ color: colors[index] }}>
            {letter}
          </span>
        ))}
      </h1>
      <button
        className="text-white bg-blue-700 p-2 rounded mx-2"
        onClick={() => handleClick(0)}
      >
        zoom in
      </button>
      <button
        className="text-white bg-blue-700 p-2 rounded mx-2"
        onClick={() => handleClick(1)}
      >
        zoom out
      </button>
    </div>
  );
};

export default Zoom;
