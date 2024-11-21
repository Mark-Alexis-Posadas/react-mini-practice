import React, { useState } from "react";

const data = [1, 2, 3, 4, 5];

export const Pagination = () => {
  const [active, setActive] = useState(0);
  console.log(data.length - 1);

  const handlePrev = () => {
    if (active > 0) {
      setActive((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (active < data.length - 1) {
      setActive((prev) => prev + 1);
    }
  };

  const handlePrevLast = () => {
    setActive(0);
  };

  const handleNextLast = () => {
    setActive(data.length - 1);
  };

  return (
    <div className="flex flex-col items-center gap-3 m-10">
      <h1 className="text-8xl">{data[active]}</h1>

      <div className="flex items-center gap-3">
        <button
          onClick={handlePrevLast}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Prev Last
        </button>

        <button
          onClick={handlePrev}
          disabled={active === 0}
          className={`px-4 py-2 bg-gray-300 rounded ${
            active === 0 ? "cursor-not-allowed" : ""
          }`}
        >
          Prev
        </button>

        {data.map((item, index) => (
          <button
            onClick={() => setActive(index)}
            key={index}
            className={`${
              active === index ? "bg-blue-600" : "bg-gray-400"
            } p-2 rounded text-white w-10 h-10`}
          >
            {item}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={active === data.length - 1}
          className={`px-4 py-2 bg-gray-300 rounded ${
            active === data.length - 1 ? "cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>

        <button
          onClick={handleNextLast}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next Last
        </button>
      </div>
    </div>
  );
};
