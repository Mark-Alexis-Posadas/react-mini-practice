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
      console.log(prevSelectedCategories);
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
    <div>
      <h1 className="font-bold">Product List</h1>
      {products.map((text, idx) => (
        <label key={idx} className="text-md">
          <input
            type="checkbox"
            className="form-check-input"
            checked={selectedCategories.includes(text.category)}
            onChange={() => toggleCategory(text.category)}
          />
          {text.category}
        </label>
      ))}
      <ul>
        {filteredProducts.map((product, idx) => (
          <li key={idx}>
            {product.productName} - {product.category} ({product.stock} in
            stock)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory;
