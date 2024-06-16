import { useState } from "react";
import { products } from "./exercises/data";
export const App = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <ul className="p-20 bg-slate-100">
      {products.map((item, index) => (
        <li
          key={index}
          className={`${
            index === active && "bg-white text-purple-600 shadow-md"
          } text-md my-3 border border-slate-300 p-3 cursor-pointer`}
          onClick={() => handleClick(index)}
        >
          {index === 1 && active === 1 ? "fucker" : item.name}
        </li>
      ))}
    </ul>
  );
};

const data = ["eat", "my", "ass"];
export const AppTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = () => {
    setCurrentIndex((p) => (p + 1) % data.length);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      {data.map((item, index) => (
        <h1
          className={`${
            index === 0
              ? "text-purple-500"
              : index === 1
              ? "text-green-500"
              : "text-red-500"
          } text-[400px] uppercase cursor-pointer`}
          key={index}
          onClick={handleClick}
        >
          {index === currentIndex && item}
        </h1>
      ))}
    </div>
  );
};
