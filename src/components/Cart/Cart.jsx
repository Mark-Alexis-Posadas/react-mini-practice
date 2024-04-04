import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import MyContext from "./Context";
import CartBag from "./CartBag";

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

  const incrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        const updatedQuantity = item.quantity + 1;
        const updatedTotalPrice = updatedQuantity * item.price;
        return {
          ...item,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        const updatedQuantity = item.quantity - 1;
        const updatedTotalPrice = updatedQuantity * item.price;
        return {
          ...item,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        addToCart,
        cart,

        totalPrice,
        toggle,
        setToggle,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      <CartBag />
      <CartItem />
    </MyContext.Provider>
  );
};

export default Cart;
