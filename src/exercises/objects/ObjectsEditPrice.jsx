import { useState } from "react";

import { REST_API } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const initialValues = {
  name: "",
  description: "",
  category: "",
  price: "",
  available: false,
};
export default function ObjectsEditPrice() {
  const [products, setProducts] = useState(REST_API);
  const [inputValue, setInputValue] = useState(initialValues);

  const [active, setActive] = useState(null);
  const [showInput, setShowInput] = useState(false);

  const handleDelete = (id) => {
    const onDelete = products.filter((item) => item.id !== id);
    setProducts(onDelete);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleStockChange = (e) => {
    const { value } = e.target;
    setInputValue({ ...inputValue, available: value === "true" });
  };

  const handleEdit = (index) => {
    const currentVal = products[index];
    setInputValue(currentVal);
    setActive(index);
    setShowInput(true);
  };

  const handleSubmit = () => {
    setActive(null);
    const updateProduct = [...products];
    updateProduct[active] = inputValue;
    setProducts(updateProduct);
    setInputValue("");
    setShowInput(false);
  };

  return (
    <div className="p-10 w-[900px] m-auto relative">
      {products.length === 0 ? (
        <h1 className="text-8xl">No Available Products!!!</h1>
      ) : (
        <ul>
          {products.map((item, index) => {
            const { id, name, price, description, category, available } = item;

            return (
              <li
                key={id}
                className={`${
                  index === active && "border-green-500"
                } border flex items-center gap-3 bg-slate-100 shadow-md  my-3 p-3 rounded`}
              >
                <h3 className="font-bold text-green-600">{name}</h3>
                <p className="text-slate-500 text-sm">{description}</p>
                <p>{category}</p>
                <p className="font-bold text-md text-black">{price}</p>
                <p className={available ? "text-green-600" : "text-red-600"}>
                  {available ? "In Stock" : "Out of stock"}
                </p>
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    className="rounded-full p-2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center"
                    onClick={() => handleEdit(index)}
                  >
                    <FontAwesomeIcon icon={faPencilSquare} />
                  </button>
                  <button
                    className="rounded-full p-2 bg-red-600 text-white w-10 h-10 flex items-center justify-center"
                    onClick={() => handleDelete(id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {showInput && (
        <div className="fixed w-full h-full left-0 p-20 top-0 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.4)]">
          <div className="flex flex-col gap-3 w-[900px] bg-white p-3 rounded">
            <input
              type="text"
              name="name"
              className="bg-slate-100 p-3 rounded flex-1"
              placeholder="Update name"
              value={inputValue.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              className="bg-slate-100 p-3 rounded flex-1"
              placeholder="Update description"
              value={inputValue.description}
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              className="bg-slate-100 p-3 rounded flex-1"
              placeholder="Update category"
              value={inputValue.category}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              className="bg-slate-100 p-3 rounded flex-1"
              placeholder="Update Price"
              value={inputValue.price}
              onChange={handleChange}
            />
            <select
              name="stock"
              value={inputValue.available ? "true" : "false"}
              onChange={handleStockChange}
              className="bg-slate-100 p-3 rounded flex-1"
            >
              <option value="true">In stock</option>
              <option value="false">Out stock</option>
            </select>
            <div className="flex items-center gap-3">
              <button
                className="bg-red-600 text-white rounded p-3"
                onClick={() => {
                  setShowInput(false), setActive(null);
                }}
              >
                cancel
              </button>
              <button
                className="bg-green-600 text-white rounded p-3"
                onClick={handleSubmit}
              >
                update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
