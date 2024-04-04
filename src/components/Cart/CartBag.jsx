import { useContext } from "react";
import MyContext from "./Context";

const CartBag = () => {
  const {
    cart,
    decrementQuantity,
    incrementQuantity,
    totalPrice,
    toggle,
    setToggle,
  } = useContext(MyContext);
  return (
    <div>
      <button
        className="text-white bg-green-400 rounded p-2"
        onClick={() => setToggle(!toggle)}
      >
        Cart bag
      </button>

      {cart.length === 0 ? (
        ""
      ) : (
        <div className="bg-slate-50 shadow-md rounded p-3">
          {cart.map((item) => (
            <div key={item.id}>
              <img className="w-20 h-20" src={item.image} alt={item.title} />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <span>{item.price}</span>
              <div className="flex">
                <button
                  className="text-white rounded p-2 bg-green-400"
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
                <input type="number" value={item.quantity} readOnly />
                <button
                  className="text-white rounded p-2 bg-green-400"
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <h1>Total Price: ${totalPrice}</h1>
        </div>
      )}
    </div>
  );
};

export default CartBag;
