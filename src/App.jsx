import React from "react";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState(null);

  const handleAddForm = () => {
    setInput(input + 1);
  };
  return (
    <div className="flex flex-col p-20">
      {input.map((item) => (
        <input
          type="text"
          placeholder="form"
          className="border border-slate-100 p-2 rounded"
        />
      ))}

      <button onClick={handleAddForm}>add form</button>
    </div>
  );
};

export default App;
