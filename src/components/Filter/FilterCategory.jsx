import React, { useState } from "react";

const FilterCategory = () => {
  const initialProducts = [
    {
      id: 1,
      productName: "Laptop",
      category: "Electronics",
      stock: 10,
    },
    {
      id: 2,
      productName: "T-shirt",
      category: "Clothing",
      stock: 20,
    },
    {
      id: 3,
      productName: "Banana",
      category: "Food",
      stock: 5,
    },
    {
      id: 4,
      productName: "Watch",
      category: "Accessories",
      stock: 15,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((c) => c !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  // Filter products based on selected categories
  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      : products;

  return (
    <div className="flex gap-3 p-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold">Product List</h1>
        {products.map((text, idx) => (
          <label key={idx} className="text-md flex items-center gap-2">
            <input
              type="checkbox"
              className="form-check-input"
              checked={selectedCategories.includes(text.category)}
              onChange={() => toggleCategory(text.category)}
            />
            {text.category}
          </label>
        ))}
      </div>
      <ul className="p-5 mt-3">
        {filteredProducts.map((product, idx) => (
          <li key={idx} className="my-3 shadow-custom-shadow p-3">
            {product.productName} - {product.category} ({product.stock} in
            stock)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory;
