import { useContext } from "react";
import MyContext from "./Context";

const CartItem = () => {
  const { products, addToCart } = useContext(MyContext);
  return (
    <div className="w-full max-w-[1120px] m-auto ">
      <h1>Product List</h1>
      <ul className="grid grid-cols-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="m-2bg-slate-100 shadow-md rounded p-2"
          >
            <img className="w-20 h-20" src={product.image} alt="image" />
            <strong>{product.title}</strong>: ${product.price}
            <p>{product.description}</p>
            <span>{product.price}</span>
            <button
              className="text-white bg-green-500 rounded p-2 ml-3"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItem;
