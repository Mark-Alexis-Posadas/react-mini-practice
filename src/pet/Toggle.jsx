import { useState } from "react";

export const Toggle = () => {
  const [toggleStates, setToggleStates] = useState([false, false, false]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    const newToggleStates = [...toggleStates];

    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };

  return (
    <>
      <div className="flex gap-5">
        {toggleStates.map((toggle, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              activeIndex === index
                ? "text-gray-500 bg-slate-100"
                : "bg-blue-600 text-white"
            } p-2 rounded-full w-10 h-10`}
          >
            {toggle ? "on" : "off"}
          </button>
        ))}
      </div>
    </>
  );
};
