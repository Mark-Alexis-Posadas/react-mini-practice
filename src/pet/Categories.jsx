import React, { useState } from "react";
import { blogCategories } from "../data";

export const Categories = () => {
  // State to track selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle category selection/deselection
  const handleCheckboxChange = (categoryId) => {
    // If the category is already selected, remove it
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    } else {
      // Otherwise, add it to the selected categories
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-xl font-semibold">Select Blog Categories</h2>

      {/* Display selected categories as chips */}
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
                onClick={() => handleCheckboxChange(categoryId)} // Deselect when clicking the chip
                className="ml-2 cursor-pointer text-red-500"
              >
                &times;
              </span>
            </div>
          );
        })}
      </div>

      {/* Display available categories with checkboxes */}
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
            />
            <label className="flex-grow">{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
