import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";

const Products = () => {
  const [products, setProducts] = useState([]);
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
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex">
      <ProductSidebar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-[16rem] gap-6 px-10">
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

export default Products;
