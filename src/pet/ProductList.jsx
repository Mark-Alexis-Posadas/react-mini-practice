import { useState } from "react";
import { REST_API } from "../exercises/data";

const ProductList = () => {
  const [data, setData] = useState(REST_API);
  const [inputVal, setInputVal] = useState("");

  const handleSearchProduct = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const searchProduct = REST_API.filter((product) =>
      product.name.toLowerCase().includes(inputVal.toLowerCase())
    );

    setData(searchProduct);
  };

  const handleClick = (status) => {
    if (status === "in stock") {
      setData(REST_API.filter((product) => product.available));
    } else if (status === "out of stock") {
      setData(REST_API.filter((product) => !product.available));
    } else {
      setData(REST_API);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6">Product List</h1>
      <div className="flex items-center justify-between mb-10">
        <ul className="flex items-center gap-3">
          <li
            className="text-green-600 text-sm cursor-pointer"
            onClick={() => handleClick("in stock")}
          >
            In Stock
          </li>
          <li
            className="text-red-500 text-sm cursor-pointer"
            onClick={() => handleClick("out of stock")}
          >
            Out of Stock
          </li>
          <li
            className="text-gray-600 text-sm cursor-pointer"
            onClick={() => handleClick("all")}
          >
            All
          </li>
        </ul>

        <form onSubmit={handleSubmitForm} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search product"
            value={inputVal}
            onChange={handleSearchProduct}
            className="border rounded p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length === 0 && <p>Product Not Found</p>}
        {data.map((item) => (
          <div
            key={item.id}
            className={`border rounded-lg p-4 shadow-md bg-white hover:bg-slate-50 ${
              item.available ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-green-500 font-bold">${item.price}</p>
            <p className="text-sm text-gray-500">Category: {item.category}</p>
            <p
              className={`text-sm mt-2 ${
                item.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.available ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
