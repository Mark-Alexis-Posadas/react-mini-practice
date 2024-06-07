import React, { useState } from "react";

const data = ["A", "B", "C"];
export default function CarouselTwo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (currentSlide <= 0) {
      return;
    }
    setCurrentSlide((currentSlide - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    if (currentSlide >= 2) {
      return;
    }
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-20 m-auto max-w-[700px] flex items-center flex-col">
      {data.map((item, index) => (
        <h1
          className={`${
            index === currentSlide ? "block" : "hidden"
          } text-4xl font-bold text-yellow-600 mb-5`}
          key={index}
        >
          {item}
        </h1>
      ))}

      <div className="flex items-center gap-3 bg-green-400 p-2">
        {data.map((_, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? "border-slate-500" : "border-slate-50"
            } w-10 h-1 border-2 cursor-pointer`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>

      <div className="flex items-center justify-between w-full">
        <button
          className={`${
            currentSlide <= 0 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"
          } text-white rounded p-2`}
          onClick={handlePrev}
        >
          prev
        </button>
        <button
          className={`${
            currentSlide >= 2 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600"
          } text-white rounded p-2`}
          onClick={handleNext}
        >
          next
        </button>
      </div>
    </div>
  );
}
