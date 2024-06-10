import { useState } from "react";
import { products } from "./exercises/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ObjectsEditPrice() {
  //Initialize active to 0
  const [active, setActive] = useState(0);
  const [product, setProduct] = useState(products);
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleDelete = (id) => {
    const onDelete = product.filter((item) => item.id !== id);
    setProduct(onDelete);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleEdit = (index) => {
    const currentVal = product[index]; //curent price
    setInputValue(currentVal.price);
    setActive(index);
    setShowInput(true);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      alert("Please add text");
      return;
    }
    setProduct((currentVal) =>
      currentVal.map((item, idx) =>
        idx === active ? { ...item, price: inputValue } : item
      )
    );
    setShowInput(false);
  };
  return (
    <div className="p-10 w-[900px] m-auto relative">
      <ul>
        {product.map((item, index) => {
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
      {showInput && (
        <div className="fixed w-full h-full left-0 p-20 top-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="bg-slate-100 p-3 rounded flex-1"
              placeholder="Update Price"
              value={inputValue}
              onChange={handleInput}
            />
            <button
              className="bg-red-600 text-white rounded p-3"
              onClick={() => setShowInput(false)}
            >
              cancel
            </button>
            <button
              className="bg-green-600 text-white rounded p-3"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
