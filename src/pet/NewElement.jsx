import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const backgroundColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-gray-500",
];

export const NewElement = () => {
  const [box, setBox] = useState([]);

  const handleAddBox = () => {
    if (box.length >= 10) return;
    setBox((prev) => [
      ...prev,
      { id: Date.now(), color: backgroundColors[prev.length] },
    ]);
  };

  useEffect(() => {
    console.log(box);
  }, [box]);
  const handleDeleteBox = (id) => {
    setBox(box.filter((boxItem) => boxItem.id !== id));
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-4">
        {box.map((boxItem, index) => (
          <div
            className={`border border-slate-300 w-full ${boxItem.color} rounded shadow-md h-[200px]`}
            key={boxItem.id}
          >
            <button
              className="bg-white rounded-full p-2 w-10 h-10"
              onClick={() => handleDeleteBox(boxItem.id)}
            >
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>

            <h1 className="text-8xl">{index}</h1>
          </div>
        ))}
      </div>

      <button onClick={handleAddBox}>Add Box</button>
    </div>
  );
};
