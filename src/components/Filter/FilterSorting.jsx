import React, { useState } from "react";

export const FilterSorting = () => {
  const initialProducts = [
    {
      productName: "Laptop",
      price: 800,
      stock: 10,
    },
    {
      productName: "Phone",
      price: 300,
      stock: 20,
    },
    {
      productName: "Tablet",
      price: 200,
      stock: 5,
    },
    {
      productName: "Headphones",
      price: 50,
      stock: 0,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filterStock, setFilterStock] = useState(false);

  const handleToggleStock = () => {
    setFilterStock((prevFilterStock) => !prevFilterStock);
  };

  // Filter products based on stock
  const filteredProducts = filterStock
    ? initialProducts.filter((product) => product.stock > 0)
    : initialProducts;

  // Sort products based on price (ascending)
  const sortedProducts = [...filteredProducts].sort(
    (a, b) => a.price - b.price
  );

  return (
    <div>
      <h1>Product List</h1>
      <label>
        <input
          type="checkbox"
          checked={filterStock}
          onChange={handleToggleStock}
        />
        Filter by In-Stock
      </label>
      <ul>
        {sortedProducts.map((product, idx) => (
          <li key={idx}>
            {product.productName} - ${product.price} ({product.stock} in stock)
          </li>
        ))}
      </ul>
    </div>
  );
};
