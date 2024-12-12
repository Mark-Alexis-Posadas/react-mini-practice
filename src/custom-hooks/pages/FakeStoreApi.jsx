import { useEffect, useState } from "react";

const FakeStore = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {products.map((item) => {
        const { id, title, price, description, catergory, image, ratings } =
          item;
        return (
          <div key={id} className="bg-slate-300 shadow-md p-3">
            <img src={image} alt="image" />
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{price}</span>
            <span>{catergory}</span>
            {ratings}
          </div>
        );
      })}
    </div>
  );
};

export default FakeStore;
