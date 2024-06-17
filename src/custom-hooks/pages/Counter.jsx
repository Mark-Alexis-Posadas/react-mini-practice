import { useCounter } from "../hooks/useCounter";

export default function Counter() {
  const { count, handleIncrement, handleDecrement } = useCounter();

  return (
    <div>
      <h1 className="text-8xl">{count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}
