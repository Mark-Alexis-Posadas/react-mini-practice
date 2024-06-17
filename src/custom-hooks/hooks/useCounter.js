import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((pC) => pC + 1);
  };

  const handleDecrement = () => {
    setCount((pC) => pC + -1);
  };

  return { count, handleIncrement, handleDecrement };
};
