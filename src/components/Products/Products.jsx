import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductSidebar from "./components/ProductSidebar";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex">
      <ProductSidebar
        products={products}
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
      />
      {isLoading && <p>Loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-[16rem] gap-6 flex-1 pl-6">
        {filteredProducts.length === 0 ? (
          <p>Products Not found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};
