const ProductSidebar = () => {
  return (
    <aside className="p-4 w-64 bg-white shadow-md rounded-lg fixed">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">Browse</h1>
        <ul className="space-y-2">
          <li className="hover:text-blue-500 cursor-pointer">All</li>
          <li className="hover:text-blue-500 cursor-pointer">Electronics</li>
          <li className="hover:text-blue-500 cursor-pointer">Jewelry</li>
          <li className="hover:text-blue-500 cursor-pointer">Men's Clothing</li>
          <li className="hover:text-blue-500 cursor-pointer">
            Women's Clothing
          </li>
        </ul>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Showing all 20 results
        </label>
        <select
          id="countries"
          className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Default Sorting</option>
          <option value="US">Sort by name (A-Z)</option>
          <option value="CA">Sort by name (Z-A)</option>
          <option value="FR">Sort by price (low to high)</option>
          <option value="DE">Sort by price (high to low)</option>
        </select>
      </div>
    </aside>
  );
};

export default ProductSidebar;
