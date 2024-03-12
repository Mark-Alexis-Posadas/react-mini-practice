import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function ChildComponent() {
  const { count, handleClick } = useContext(MyContext);
  const buttonText = ["increment", "decrement"];
  return (
    <div>
      <h1>{count}</h1>
      {buttonText.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`text-white rounded p-1 ${
            index === 1 ? "bg-red-700" : "bg-purple-800"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
