import React, { useState } from "react";

const DeleteElement = () => {
  const [fruits, setFruits] = useState(["Orange", "Banana", "Apple,"]);

  const removeElement = (idx) => {
    const newFruits = fruits.filter((_, i) => i !== idx);
    setFruits(newFruits);
  };

  return (
    <>
      <h1>Delete Element</h1>

      {fruits.map((fruit, idx) => (
        <div key={idx}>
          <button onClick={() => removeElement(idx)}>{fruit}</button>
        </div>
      ))}
    </>
  );
};

export default DeleteElement;
