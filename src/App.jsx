import { useState } from "react";

export default function Counter() {
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
