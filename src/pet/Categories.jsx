import React, { useState } from "react";
import { blogCategories } from "../data";

export const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Select Blog Categories</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {selectedCategories.map((categoryId) => {
          const category = blogCategories.find((cat) => cat.id === categoryId);
          return (
            <div
              key={categoryId}
              className="flex items-center px-4 py-1 bg-blue-100 text-blue-700 rounded-full"
            >
              {category.name}
              <span
                onClick={() => handleCheckboxChange(categoryId)}
                className="ml-2 cursor-pointer text-red-500"
              >
                &times;
              </span>
            </div>
          );
        })}
      </div>

      <ul>
        {blogCategories.map((item) => (
          <li
            className="border border-slate-300 p-3 cursor-pointer flex items-center"
            key={item.id}
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
              className="mr-3"
              name={item.id}
            />
            <label className="flex-grow" for={item.id}>
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
