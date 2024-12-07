import { REST_API } from "../data";
import { useState } from "react";
const buttonText = [
  "Filter Electronics",
  "Filter Clothing",
  "Filter Accessories",
  "All",
];
export default function FilteredProducts() {
  const [filteredProducts, setFilteredProducts] = useState(REST_API);
  const [current, setCurrent] = useState(3);
  const handleFilter = (index) => {
    setCurrent(index);
    if (index === 0) {
      setFilteredProducts(
        REST_API.filter((item) => item.category.includes("Electronics"))
      );
    } else if (index === 1) {
      setFilteredProducts(
        REST_API.filter((item) => item.category.includes("Clothing"))
      );
    } else if (index === 2) {
      setFilteredProducts(
        REST_API.filter((item) => item.category.includes("Accessories"))
      );
    } else {
      setFilteredProducts(REST_API);
    }
  };

  return (
    <>
      <ul>
        {filteredProducts.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <h3 className="font-bold mb-3 text-blue-500">{item.name}</h3>
            <span className="flex items-center gap-3">
              {item.description} - <small>{item.price}</small>
              <small className="text-slate-400">{item.category}</small>
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 mt-5">
        {buttonText.map((text, index) => (
          <button
            key={index}
            className={`${
              index === current ? "bg-gray-400" : "bg-blue-500"
            }  text-white rounded p-2`}
            onClick={() => handleFilter(index)}
          >
            {text}
          </button>
        ))}
      </div>
    </>
  );
}
