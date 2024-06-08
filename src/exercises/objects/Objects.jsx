// Render List of Products: Render a list of products from an array of product objects. Each product object should have properties like name, price, and description.

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "A high-performance laptop for work and gaming.",
    category: "Electronics",
    available: true,
  },
  {
    id: 2,
    name: "Headphones",
    price: 149,
    description: "Wireless headphones with noise-cancellation feature.",
    category: "Electronics",
    available: false,
  },
  {
    id: 3,
    name: "T-shirt",
    price: 29,
    description: "Comfortable cotton t-shirt available in various colors.",
    category: "Clothing",
    available: true,
  },
  {
    id: 4,
    name: "Backpack",
    price: 79,
    description: "Durable backpack with multiple compartments.",
    category: "Accessories",
    available: true,
  },
];

export const RenderList = () => {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id} className="flex items-center gap-3">
          <h3 className="font-bold mb-3 text-blue-500">{item.name}</h3>
          <span>
            {item.description} -{" "}
            <small className="text-slate-400">{item.category}</small>
          </span>
          <button
            className={`${
              item.available
                ? "text-green-500"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            {item.available ? "available" : "not available"}
          </button>
        </li>
      ))}
    </ul>
  );
};

//Filter Products: Add buttons to filter the products based on their category. Categories could be stored as a property in the product objects.
const buttonText = [
  "Filter Electronics",
  "Filter Clothing",
  "Filter Accessories",
  "All",
];
export const FilterProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (index) => {
    if (index === 0) {
      setFilteredProducts(
        products.filter((item) => item.category.includes("Electronics"))
      );
    } else if (index === 1) {
      setFilteredProducts(
        products.filter((item) => item.category.includes("Clothing"))
      );
    } else if (index === 2) {
      setFilteredProducts(
        products.filter((item) => item.category.includes("Accessories"))
      );
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <>
      <ul>
        {filteredProducts.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <h3 className="font-bold mb-3 text-blue-500">{item.name}</h3>
            <span className="flex items-center gap-3">
              {item.description} - <small>{item.price}</small>
              <small className="text-slate-400">{item.category}</small>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 mt-5">
        {buttonText.map((text, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white rounded p-2"
            onClick={() => handleFilter(index)}
          >
            {text}
          </button>
        ))}
      </div>
    </>
  );
};
