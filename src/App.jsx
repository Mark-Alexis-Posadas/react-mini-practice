import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "A high-performance laptop for work and gaming.",
    category: "Electronics",
    available: true,
  },
  {
    id: 2,
    name: "Headphones",
    price: 149,
    description: "Wireless headphones with noise-cancellation feature.",
    category: "Electronics",
    available: false,
  },
];

const App = () => {
  const [arr, setArr] = useState(products);

  const handleAddArray = () => {
    const newItem = {
      id: uuidv4(),
      name: "Alexis",
      price: 1000,
      description: "pogi",
      category: "human",
      available: true,
    };

    setArr((prev) => {
      const updatedArr = [...prev, newItem];
      console.log(updatedArr);
      return updatedArr;
    });

    //OR

    // setArr((prev) => [
    //   ...prev,
    //   {
    //     id: uuidv4(),
    //     name: "Alexis",
    //     price: 1000,
    //     description: "pogi",
    //     category: "human",
    //     available: true,
    //     //OR newItem
    //   },
    // ]);
  };

  return (
    <div>
      {arr.map((item, index) => (
        <div key={index}>
          {item.name} - {item.id} - {item.price} - {item.description} -
          {item.category}
        </div>
      ))}

      <button
        className="text-white bg-green-700 p-2 rounded"
        onClick={handleAddArray}
      >
        Add array
      </button>
    </div>
  );
};

export default App;
