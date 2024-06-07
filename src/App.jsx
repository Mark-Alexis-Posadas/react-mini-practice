import React, { useState } from "react";
import CarouselTwo from "./components/Carousel/CarouselTwo";
const data = ["a", "b", "c"];

export default function App() {
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % data.length);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          className={`text-9xl ${
            index === current ? "text-red-600" : "text-black"
          }`}
          key={index}
        >
          {item}
        </div>
      ))}
      <button onClick={handleClick}>click</button>
      <CarouselTwo />
    </div>
  );
}
