import React from "react";

export default function Categories({ category, activeCategory, index }) {
  return (
    <li
      key={category}
      className={`${
        activeCategory === index ? "text-blue-500" : "text-gray-500"
      } hover:text-blue-500 cursor-pointer`}
      onClick={() => handleSetCategory(category, index)}
    >
      {category}
    </li>
  );
}
