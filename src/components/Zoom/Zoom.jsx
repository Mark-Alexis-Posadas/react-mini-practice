import { useState } from "react";

const colors = ["red", "blue", "green", "orange", "purple"];

const Zoom = () => {
  const [size, setSize] = useState("6rem");

  const handleClick = (index) => {
    if (index === 0) {
      setSize(`${parseInt(size) + 10}rem`);
      return;
    }
    setSize(`${parseInt(size) - 10}rem`);
  };

  return (
    <div className="mt-6 text-center">
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
