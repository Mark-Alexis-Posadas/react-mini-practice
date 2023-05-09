import { useState } from "react";
import React from "react";

const RemoveElement = () => {
  const initialState = [
    { id: 1, name: "Banana", amount: 5 },
    { id: 2, name: "Apple", amount: 6 },
  ];

  const removeSecond = () => {
    setFruits((current) => current.filter((fruit) => fruit.id !== 2));
  };

  const [fruits, setFruits] = useState(initialState);

  return (
    <div style={{ margin: "16px" }}>
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <h2>Name: {fruit.name}</h2>
          <h2>Amount: {fruit.amount}</h2>
          <hr />
        </div>
      ))}
      <button onClick={removeSecond} className="btn btn-primary">
        Remove second
      </button>
    </div>
  );
};

export default RemoveElement;
