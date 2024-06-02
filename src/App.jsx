import React, { useState } from "react";
const data = [
  {
    title: "hello",
  },
  {
    title: "world",
  },
];
const App = () => {
  const [input, setInput] = useState("");
  const [currentVal, setCurrentVal] = useState(data);
  const [edit, setEdit] = useState(false);
  const [current, setCurrent] = useState({ index: null, text: "" });

  const handleEdit = (index) => {
    setCurrent({ index: index, title: currentVal[index].title });
    setInput(currentVal[index].title);
    setEdit(true);
  };

  const handleUpdate = () => {
    if (input.trim() === "") {
      alert("please add text");
      return;
    }

    setCurrentVal((currentVal) =>
      currentVal.map((item, index) =>
        index === current.index ? { ...item, title: input } : item
      )
    );
    setInput(""); //clear input fields when submit
    setEdit(false);
  };
  return (
    <div className="w-full">
      <ul className="max-w-[700px] m-auto">
        {currentVal.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between my-2 rounded bg-black text-white p-2"
          >
            {item.title}
            <button
              className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      {edit && (
        <div className="max-w-[700px] m-auto flex items-center justify-between gap-3">
          <input
            className="border border-slate-400 p-2 rounded w-full"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="edit"
          />
          <button
            className="rounded p-2 text-white bg-green-600"
            onClick={handleUpdate}
          >
            update
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
