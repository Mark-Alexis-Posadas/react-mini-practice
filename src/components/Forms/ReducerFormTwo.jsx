import { useState } from "react";

const ReducerFormTwo = () => {
  const [state, setState] = useState("A");
  const data = [
    "Beer",
    "Wine",
    "Gins",
    "Gin",
    "Gin",
    "Whiskey",
    "Brandy",
    "Tequila",
  ];
  const [search, setSearch] = useState("");
  const handleClick = (param) => {
    setState(param);
  };
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const handleSet = (d) => {
    setSearch(d);
  };
  return (
    <div>
      <h1>{state}</h1>
      <button
        className={`text-white bg-red-400 p-2 rounded mr-2 ${
          state === "bg-red-400" ? "border boder-black" : ""
        }`}
        onClick={() => handleClick("A")}
      >
        A
      </button>
      <button
        className={`text-white bg-red-400 p-2 rounded mr-2 ${
          state === "bg-red-400" ? "border boder-black" : ""
        }`}
        onClick={() => handleClick("B")}
      >
        B
      </button>
      <button
        className={`text-white bg-red-400 p-2 rounded mr-2 ${
          state === "bg-red-400" ? "border boder-black" : ""
        }`}
        onClick={() => handleClick("C")}
      >
        C
      </button>

      <div className="mt-5 bg-slate-100 shadow-md p-5">
        <input
          type="text"
          placeholder="search..."
          className="bg-white shadow-sm p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="bg-white shadow-md mt-6">
          {filteredData.map((d, idx) => (
            <li
              className="border border-slate-400 rounded p-2 mb-2 cursor-pointer hover:bg-slate-50"
              key={idx}
              onClick={() => handleSet(d)}
            >
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReducerFormTwo;
