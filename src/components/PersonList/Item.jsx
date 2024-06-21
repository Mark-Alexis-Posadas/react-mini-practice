import React from "react";

export default function Item({
  index,
  name,
  age,
  gender,
  occupation,
  city,
  country,
  activeList,
  handleEdit,
  handleDelete,
}) {
  return (
    <li
      className={`${
        index === activeList
          ? "border border-green-700 bg-green-50 text-white"
          : "bg-white text-black"
      } shadow-md p-2 rounded my-3 flex flex-col md:flex-row md:items-center justify-between`}
      key={index}
    >
      <ul>
        <li className="font-bold text-purple-600 flex items-center gap-2">
          Name:
          <span className="text-black text-sm font-light">{name}</span>
        </li>
        <li className="font-bold text-purple-600 flex items-center gap-2">
          Age:
          <span className="text-black text-sm font-light">{age}</span>
        </li>
        <li className="font-bold text-purple-600 flex items-center gap-2">
          Gender:
          <span className="text-black text-sm font-light">{gender}</span>
        </li>
        <li className="font-bold text-purple-600 flex items-center gap-2">
          Occupation:
          <span className="text-black text-sm font-light">{occupation}</span>
        </li>
        <li className="font-bold text-purple-600 flex items-center gap-2">
          City:
          <span className="text-black text-sm font-light">{city}</span>
        </li>
        <li className="font-bold text-purple-600 flex items-center gap-2">
          Country:
          <span className="text-black text-sm font-light">{country}</span>
        </li>
      </ul>
      <div className="flex items-center gap-3 mt-5 md:mt-0">
        <button
          className="bg-blue-600 text-white font-bold text-sm p-2 rounded"
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 text-white font-bold text-sm p-2 rounded"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
