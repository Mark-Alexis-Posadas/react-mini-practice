import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const data = [
  {
    name: "alexis",
  },
  {
    name: "aldo",
  },
];
export const Theme = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSecondary, setToggleSecondary] = useState(false);

  // Handles both Light and Dark mode clicks
  const handleClick = (mode) => {
    setToggleSecondary(mode === "Dark");
    console.log(toggleSecondary);
    setToggle(false);
  };

  return (
    <div className="p-10">
      <button onClick={() => setToggle((prev) => !prev)}>
        <FontAwesomeIcon icon={toggleSecondary ? faMoon : faSun} />
      </button>

      {toggle && (
        <ul>
          <li
            className="cursor-pointer my-2"
            onClick={() => handleClick("Light")}
          >
            Light
          </li>
          <li
            className="cursor-pointer my-2"
            onClick={() => handleClick("Dark")}
          >
            Dark
          </li>
        </ul>
      )}
    </div>
  );
};

export const List = () => {
  const [person, setPerson] = useState(data);

  const handleUpdate = (idx) => {
    setPerson((prev) =>
      prev.map((item, index) =>
        index === idx ? { ...item, name: "mantol" } : item
      )
    );
  };
  return (
    <>
      {person.map((item, index) => (
        <div className="flex items-center gap-4" key={index}>
          <h1>{item.name}</h1>
          <button onClick={() => handleUpdate(index)}>update aldo</button>
        </div>
      ))}
    </>
  );
};

export default function CounterStepSize() {
  const [count, setCount] = useState(0);
  const [stepSize, setStepSize] = useState(1);

  function handleIncrement() {
    setCount((prevCount) => prevCount + stepSize);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - stepSize);
  }

  function handleStepSizeChange(e) {
    const value = Number(e.target.value);
    setStepSize(value);
  }

  return (
    <>
      <h1 className="font-bold text-4xl">{count}</h1>
      <input
        type="number"
        value={stepSize}
        onChange={handleStepSizeChange}
        className="text-black bg-slate-300 p-2 rounded mb-3"
      />
      <div className="flex items-center gap-3">
        <button
          className="text-white bg-blue-500 rounded p-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="text-white bg-red-500 rounded p-2"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </>
  );
}
