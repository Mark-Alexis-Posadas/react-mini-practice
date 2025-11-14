import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import { Products } from "./components/Products/Products";

const data = [
  {
    id: 1,
    price: 20,
    title: "Basic Item",
    description: "A simple item priced at a budget-friendly rate.",
  },
  {
    id: 2,
    price: 30,
    title: "Premium Item",
    description: "A higher-end product offering more features and value.",
  },
];

const App = () => {
  const [products, setProducts] = useState(data);
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [toggleAddProduct, setToggleAddProduct] = useState(false);
  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);

  const handleUpdate = (id, newPrice) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, price: newPrice } : p))
    );
  };

  const handleIncreaseProduct = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, price: p.price + 10 } : p))
    );
  };

  const handleRemoveProduct = (id) => {
    const removeProduct = products.filter((product) => product.id !== id);
    setProducts(removeProduct);
  };

  const handleSort = (sort) => {
    if (sort === "ascending") {
      const ascending = [...products].sort((a, b) => a.price - b.price);
      setProducts(ascending);
    } else {
      const descending = [...products].sort((a, b) => b.price - a.price);
      setProducts(descending);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!productId.trim()) newErrors.productId = "Product ID is required";
    if (!productPrice.trim())
      newErrors.productPrice = "Product Price is required";
    if (!productTitle.trim())
      newErrors.productTitle = "Product Title is required";
    if (!productDescription.trim())
      newErrors.productDescription = "Product Description is required";

    return newErrors;
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const idExists = products.some(
      (product) => product.id === Number(productId)
    );

    if (idExists) {
      setErrors({ productId: "Product ID already exists!" });
      return;
    }

    const newProduct = {
      id: Number(productId),
      price: Number(productPrice),
      title: productTitle,
      description: productDescription,
    };

    setProducts((prev) => [...prev, newProduct]);

    // Clear form and errors
    setProductId("");
    setProductPrice("");
    setProductTitle("");
    setProductDescription("");
    setErrors({});
    setToggleAddProduct(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setToggleAddProduct(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold text-center">Game Shop</h1>
        <button
          className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 transition-all rounded-full shadow-lg"
          onClick={() => setToggleAddProduct(!toggleAddProduct)}
        >
          + Add Product
        </button>
      </div>

      <ul className="space-y-4">
        {products.length === 0 ? (
          <li className="text-center text-xl text-gray-500">
            No available products
          </li>
        ) : (
          products.map((product) => (
            <li
              key={product.id}
              className="p-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-lg mb-3">{product.description}</p>
              <p className="text-xl font-bold mb-3">Price: ${product.price}</p>

              <div className="flex gap-4">
                <button
                  className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 transition-all rounded-full shadow-lg"
                  onClick={() => handleIncreaseProduct(product.id)}
                >
                  +10 to Product
                </button>

                <button
                  className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 transition-all rounded-full shadow-lg"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      <div className="mt-6">
        <button
          className="px-4 py-2 w-full text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg shadow-xl"
          onClick={() => handleUpdate(2, 100)}
        >
          Update Product
        </button>
      </div>

      {toggleAddProduct && (
        <>
          {/* Overlay background */}
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            {/* Modal Box */}
            <div
              className="bg-gray-900 p-6 rounded-lg shadow-xl w-96"
              ref={modalRef}
            >
              {/* Close Button */}
              <button
                onClick={() => setToggleAddProduct(false)} // Assuming this function toggles visibility
                className="absolute top-4 right-4 text-white text-2xl"
              >
                &times;
              </button>

              <h2 className="text-3xl text-center font-extrabold text-white mb-6">
                Add New Product
              </h2>

              {/* Modal Form */}
              <form onSubmit={handleProductSubmit} className="space-y-4">
                <input
                  onChange={(e) => setProductTitle(e.target.value)}
                  value={productTitle}
                  placeholder="Enter Product Title"
                  type="text"
                  className="w-full p-3 bg-gray-800 rounded-lg border-2 border-gray-700 text-white placeholder-gray-500"
                />
                {errors.productTitle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.productTitle}
                  </p>
                )}

                <textarea
                  onChange={(e) => setProductDescription(e.target.value)}
                  value={productDescription}
                  placeholder="Enter Product Description"
                  className="w-full p-3 bg-gray-800 rounded-lg border-2 border-gray-700 text-white placeholder-gray-500"
                ></textarea>
                {errors.productDescription && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.productDescription}
                  </p>
                )}

                <input
                  onChange={(e) => setProductId(e.target.value)}
                  value={productId}
                  placeholder="Enter Product ID"
                  type="number"
                  className="w-full p-3 bg-gray-800 rounded-lg border-2 border-gray-700 text-white placeholder-gray-500"
                />

                {errors.productId && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.productId}
                  </p>
                )}

                <input
                  onChange={(e) => setProductPrice(e.target.value)}
                  value={productPrice}
                  placeholder="Enter Product Price"
                  type="number"
                  className="w-full p-3 bg-gray-800 rounded-lg border-2 border-gray-700 text-white placeholder-gray-500"
                />

                {errors.productPrice && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.productPrice}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all"
                >
                  Add New Product
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      <div className="flex gap-4 mt-6 justify-center">
        <button
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full shadow-lg"
          onClick={() => handleSort("ascending")}
        >
          Sort Ascending
        </button>

        <button
          className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-full shadow-lg"
          onClick={() => handleSort("descending")}
        >
          Sort Descending
        </button>
      </div>

      <Products />
    </div>
  );
};

export default App;
