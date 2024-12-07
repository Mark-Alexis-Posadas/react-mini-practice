import {products}
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AddToCart() {
  const [toggleCart, setToggleCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  const handleAddToCart = (text) => {
    if (cart.includes(text)) {
      return;
    }
    setCart((prev) => [...prev, text]);
    setCartNumber((prev) => prev + 1);
  };

  const handleDelete = (index) => {
    const removeCart = cart.filter((_, idx) => idx !== index);
    setCart(removeCart);
    index === 0 && setToggleCart(false);
    setCartNumber((prev) => prev - 1);
  };

  return (
    <div className="grid grid-cols-2 gap-3 p-20">
      <div>
        <button
          className="bg-white p-2 rounded shadow-md flex items-center justify-center text-4xl"
          onClick={() => setToggleCart(!toggleCart)}
        >
          <FontAwesomeIcon icon={faCartArrowDown} />
          <small>{cartNumber}</small>
        </button>
        {cart <= 0 ? (
          <p>Cart is empty </p>
        ) : (
          toggleCart && (
            <ul className="bg-slate-100 shadow-md p-3 rounded">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center gap-3 my-3">
                  <h3 className="font-bold text-blue-500">{item.name}</h3>
                  <span className="flex items-center gap-3">
                    {item.description} -
                    <span className="font-bold text-md">{item.price}</span>
                    <small className="text-slate-400">{item.category}</small>
                  </span>
                  <button
                    className="bg-red-500 text-white p-2 rounded flex items-center justify-center ml-auto"
                    onClick={() => handleDelete(index)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <div className="flex items-center">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="number"
                      value={cartNumber}
                      id="quantity"
                      onChange={(e) => setCartNumber(e.target.value)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )
        )}
      </div>

      <ul>
        {products.map((item) => (
          <li key={item.id} className="flex items-center gap-3 my-3">
            <h3 className="font-bold mb-3 text-blue-500">{item.name}</h3>
            <span>
              {item.description} -{" "}
              <small className="text-slate-400">{item.category}</small>
            </span>
            <button
              className={`${
                item.available
                  ? "text-green-500"
                  : "text-gray-300 cursor-not-allowed"
              }`}
            >
              {item.available ? "available" : "not available"}
            </button>
            <button
              className="bg-green-500 text-white rounded p-2"
              onClick={() => handleAddToCart(item)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
