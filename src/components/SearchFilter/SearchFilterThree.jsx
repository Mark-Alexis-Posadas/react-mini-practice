import { useEffect } from "react";
import useProductStore from "../../store";

export default function SearchFilterThree() {
  const { products, searchTerm, setSearchTerm, fetchProducts } =
    useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products on component mount

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mx-auto my-5">
      <input
        className="border border-gray-400 p-3 w-full"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="bg-gray-200">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="py-2 bg-white my-2 shadow-lg rounded-sm p-3 flex items-center justify-between"
          >
            {product.title}
            <button className="bg-purple-500 text-white rounded p-2">
              close
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
