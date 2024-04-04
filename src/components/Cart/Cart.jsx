import { useState, useEffect } from "react";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].totalPrice =
        updatedCart[existingItemIndex].quantity *
        updatedCart[existingItemIndex].price;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1, totalPrice: product.price },
      ]);
    }
  };

  const decrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const incrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

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
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <input type="number" value={item.quantity} readOnly />
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
            </div>
          ))}

          <h1>Total Price: ${totalPrice}</h1>
        </div>
      )}

      <div className="w-full max-w-[1120px] m-auto">
        <h1>Product List</h1>
        <ul className="grid grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
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
    </div>
  );
};

export default Cart;
