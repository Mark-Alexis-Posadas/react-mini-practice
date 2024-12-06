import { useState, useEffect } from "react";
import { ProductCard } from "./components/ProductCard";
export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleDeleteProduct = (id) => {
    const deleteProduct = cart.filter((c) => c.id !== id);
    setCart(deleteProduct);
  };

  return (
    <div>
      {cart.map((item) => (
        <div>
          <img className="w-[100px]" src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <button
            className="text-red-600"
            onClick={() => handleDeleteProduct(item.id)}
          >
            delete
          </button>
        </div>
      ))}
      <div className="grid grid-cols-4 gap-4 p-10">
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
