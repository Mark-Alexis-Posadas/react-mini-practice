import { useState } from "react";
import Option from "./common/Option";
import Categories from "./common/Categories";
const sortOptions = [
  { value: "", label: "Default Sorting" },
  { value: "sort_a_to_z", label: "Sort by name (A-Z)" },
  { value: "sort_z_to_a", label: "Sort by name (Z-A)" },
  { value: "low_to_high", label: "Sort by price (low to high)" },
  { value: "high_to_low", label: "Sort by price (high to low)" },
];

const categories = [
  "All",
  "Electronics",
  "Accessories",
  "Home",
  "Storage",
  "Furniture",
  "Wearable",
];

const ProductSidebar = ({
  products,
  filteredProducts,
  setFilteredProducts,
}) => {
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
    <aside className="p-4 w-64 bg-white shadow-md rounded-lg fixed mr-5">
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
          {categories.map((category, index) => (
            <Categories
              handleSetCategory={handleSetCategory}
              key={index}
              index={index}
              category={category}
              activeCategory={activeCategory}
            />
          ))}
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
          {sortOptions.map((option, index) => (
            <Option key={index} option={option} />
          ))}
        </select>
      </div>
    </aside>
  );
};

export default ProductSidebar;
