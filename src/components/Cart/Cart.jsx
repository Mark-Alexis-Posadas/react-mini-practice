import { useState, useEffect } from "react";
import { ProductCard } from "./components/ProductCard";
import { CartModal } from "./CartModal";
export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isToggleCart, setIsToggleCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const existingItem = cart.findIndex((c) => c.id === product.id);
    console.log(existingItem);
    if (existingItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItem].quantity += 1;
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleDeleteProduct = async (id) => {
    const deleteProduct = cart.filter((c) => c.id !== id);
    setCart(deleteProduct);
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-end py-10 px-20">
        <button onClick={() => setIsToggleCart(!isToggleCart)}>Cart</button>
      </div>
      {isToggleCart && (
        <CartModal cart={cart} handleDeleteProduct={handleDeleteProduct} />
      )}
      <div className="grid grid-cols-4 gap-4 p-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
