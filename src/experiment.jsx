import { useState } from "react";

export const ToggleViceVersa = () => {
  const [a, setA] = useState("a");
  const [b, setB] = useState("b");

  const handleClick = () => {
    setA(a === "a" ? "b" : "a");
    setB(b === "b" ? "a" : "b");
  };
  return (
    <div>
      <button onClick={handleClick}>{a}</button>
      <button onClick={handleClick}>{b}</button>
    </div>
  );
};
