import { useState } from "react";

export const BasicCalculator = () => {
  const [sign, setSign] = useState("");
  const [equals, setEquals] = useState("");
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [result, setResult] = useState(null);

  const handleOperand = (operand) => {
    setSign(operand);
  };

  const handleResult = (p) => {
    if (sign === "+") {
      const r = parseFloat(numOne) + parseFloat(numTwo);
      setResult(r);
    } else if (sign === "-") {
      const r = parseFloat(numOne) - parseFloat(numTwo);
      setResult(r);
    } else if (sign === "*") {
      const r = parseFloat(numOne) * parseFloat(numTwo);
      setResult(r);
    } else {
      const r = parseFloat(numOne) / parseFloat(numTwo);
      setResult(r);
    }

    setResult(r);
    setEquals(p);
  };

  return (
    <div className="p-10">
      <div className="flex items-center gap-3">
        <h1>{numOne}</h1> <b>{sign}</b> <h1>{numTwo}</h1> <b>{equals}</b>
        <p>{result}</p>
      </div>

      <div className="flex items-center gap-4">
        <input
          className="p-2 rounded h-10 bg-slate-200 flex items-center justify-center"
          type="number"
          value={numOne}
          onChange={(e) => setNumOne(e.target.value)}
          placeholder="type a number"
        />
        <button
          onClick={() => handleOperand("+")}
          className="p-2 rounded h-10 bg-blue-500 text-white flex items-center justify-center"
        >
          +
        </button>
        <button
          onClick={() => handleOperand("-")}
          className="p-2 rounded h-10 bg-blue-500 text-white flex items-center justify-center"
        >
          -
        </button>
        <button
          onClick={() => handleOperand("*")}
          className="p-2 rounded h-10 bg-blue-500 text-white flex items-center justify-center"
        >
          *
        </button>
        <button
          onClick={() => handleOperand("/")}
          className="p-2 rounded h-10 bg-blue-500 text-white flex items-center justify-center"
        >
          /
        </button>
        <input
          className="p-2 rounded h-10 bg-slate-200 flex items-center justify-center"
          type="number"
          placeholder="type a number"
          value={numTwo}
          onChange={(e) => setNumTwo(e.target.value)}
        />
        <button
          onClick={() => handleResult("=")}
          className="p-2 rounded h-10 bg-blue-500 text-white flex items-center justify-center"
        >
          =
        </button>
      </div>
    </div>
  );
};
