import React, { useState } from "react"; // Import React and useState hook

const DeleteElement = () => {
  const [fruits, setFruits] = useState(["Orange", "Banana", "Apple,"]); // Declare state variable fruits and setter function setFruits using useState hook. Initialize fruits with an array of strings.

  const removeElement = (idx) => {
    // Declare a function removeElement with an index parameter idx
    const newFruits = fruits.filter((_, i) => i !== idx); // Create a new array newFruits using the filter method. Remove the element with index idx from the fruits array.
    setFruits(newFruits); // Update the state of fruits to newFruits using setFruits
  };

  return (
    <>
      <h1>Delete Element</h1> // Render a heading
      {fruits.map(
        (
          fruit,
          idx // Map over the fruits array and render a button element for each fruit
        ) => (
          <div key={idx}>
            <button onClick={() => removeElement(idx)}>{fruit}</button> // On
            click of the button, call the removeElement function passing in the
            current index
          </div>
        )
      )}
    </>
  );
};

export default DeleteElement; // Export the DeleteElement component
