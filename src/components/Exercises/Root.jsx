import React, { useState } from "react";

export default function Root() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("error", error);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  fetchData();

  return (
    <>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              {item.title}
              <span>{item.description}</span>

              <button onClick={() => addToCart(item)}>Add to cart</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      <div>
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((cartItem) => (
              <li key={cartItem.id}>{cartItem.title}</li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}
