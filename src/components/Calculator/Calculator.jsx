import React from "react";
import { useState } from "react";

export default function Addition() {
  const [valOne, setValOne] = useState("");
  const [valTwo, setValTwo] = useState("");
  const [plus, setPlus] = useState("");
  const [result, setResult] = useState(null);

  const handleResult = () => {
    const output = parseFloat(valOne) + parseFloat(valTwo);
    setResult(output);
  };

  return (
    <>
      {valOne} {plus} {valTwo} = {result}
      <div className="flex items-center gap-3">
        <input
          type="number"
          placeholder="number"
          className="w-12 border border-black p-2"
          value={valOne}
          onChange={(e) => setValOne(e.target.value)}
        />
        <button
          className="rounded text-white bg-blue-400 p-2"
          onClick={() => setPlus("+")}
        >
          +
        </button>
        <input
          type="number"
          placeholder="number"
          className="w-12 border border-black p-2"
          value={valTwo}
          onChange={(e) => setValTwo(e.target.value)}
        />
        <button
          className="rounded text-white bg-blue-400 p-2"
          onClick={handleResult}
        >
          =
        </button>
      </div>
    </>
  );
}
