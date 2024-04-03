import { useState, useEffect } from "react";
const data = [
  {
    id: 1,
    bgColor: "bg-green-600",
  },
  {
    id: 2,
    bgColor: "bg-purple-600",
  },
  {
    id: 3,
    bgColor: "bg-yellow-600",
  },

  {
    id: 4,
    bgColor: "bg-red-600",
  },
];

const Colors = () => {
  const [bg, setBg] = useState(() => localStorage.getItem("bg"));

  const handleClick = (b) => {
    setBg(b);
  };

  useEffect(() => {
    localStorage.setItem("bg", bg);
  }, [bg]);

  return (
    <div className="mt-5">
      <div className={`w-20 h-20 ${bg}`}></div>

      {data.map((d) => (
        <button
          key={d.id}
          className={`text-white w-20 h-20 ${d.bgColor} ${
            bg === d.bgColor ? "border border-black" : ""
          }`}
          onClick={() => handleClick(d.bgColor)}
        ></button>
      ))}
    </div>
  );
};

export default Colors;
