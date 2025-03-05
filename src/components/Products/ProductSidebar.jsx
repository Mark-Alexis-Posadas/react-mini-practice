import { useState } from "react";

const ProductSidebar = ({ products, setFilteredProducts }) => {
  const [inputValue, setInputValue] = useState("");
  const [activeCategory, setActiveCategory] = useState(0);
  const [sortValue, setSortValue] = useState("");

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setInputValue(searchTerm);

    const searchProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(searchProducts);
  };

  const handleSetCategory = (category, index) => {
    setActiveCategory(index);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const catProducts = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(catProducts);
    }
  };

  const handleSort = (e) => {
    const sortTerm = e.target.value;
    setSortValue(sortTerm);

    let sortedProducts = [...products];

    if (sortTerm === "sort_a_to_z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortTerm === "sort_z_to_a") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortTerm === "low_to_high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortTerm === "high_to_low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <aside className="p-4 w-64 bg-white shadow-md rounded-lg fixed">
      <div className="mb-4">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Search products"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">Browse</h1>
        <ul className="space-y-2">
          <li
            className={`${
              activeCategory === 0 ? "text-blue-500" : "text-gray-500"
            } hover:text-blue-500 cursor-pointer`}
            onClick={() => handleSetCategory("All", 0)}
          >
            All
          </li>
          <li
            className={`${
              activeCategory === 1 ? "text-blue-500" : "text-gray-500"
            } hover:text-blue-500 cursor-pointer`}
            onClick={() => handleSetCategory("Electronics", 1)}
          >
            Electronics
          </li>
          <li
            className={`${
              activeCategory === 2 ? "text-blue-500" : "text-gray-500"
            } hover:text-blue-500 cursor-pointer`}
            onClick={() => handleSetCategory("Accessories", 2)}
          >
            Accessories
          </li>
          <li
            className={`${
              activeCategory === 3 ? "text-blue-500" : "text-gray-500"
            } hover:text-blue-500 cursor-pointer`}
            onClick={() => handleSetCategory("Home", 3)}
          >
            Home
          </li>
          <li
            className={`${
              activeCategory === 4 ? "text-blue-500" : "text-gray-500"
            } hover:text-blue-500 cursor-pointer`}
            onClick={() => handleSetCategory("Storage", 4)}
          >
            Storage
          </li>
          <li
            className={`${
              activeCategory === 5 ? "text-blue-500" : "text-gray-500"
            } hover:text-blue-500 cursor-pointer`}
            onClick={() => handleSetCategory("Furniture", 5)}
          >
            Furniture
          </li>
          <li
            className={`${
              activeCategory === 6 ? "text-blue-500" : "text-gray-500"
            } hover:text-blue-500 cursor-pointer`}
            onClick={() => handleSetCategory("Wearable", 6)}
          >
            Wearable
          </li>
        </ul>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Showing all {products.length} results
        </label>
        <select
          value={sortValue}
          onChange={handleSort}
          id="countries"
          className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Default Sorting</option>
          <option value="sort_a_to_z">Sort by name (A-Z)</option>
          <option value="sort_z_to_a">Sort by name (Z-A)</option>
          <option value="low_to_high">Sort by price (low to high)</option>
          <option value="high_to_low">Sort by price (high to low)</option>
        </select>
      </div>
    </aside>
  );
};

export default ProductSidebar;
