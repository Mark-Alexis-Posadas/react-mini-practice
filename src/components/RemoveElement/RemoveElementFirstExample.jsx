import React, { useState } from "react"; // Import React and useState hook

const DeleteElement = () => {
  const [visible, setVisible] = useState(true); // Declare state variable visible and setter function setVisible using useState hook. Initialize visible to true.

  const removeElement = () => {
    // Declare a function removeElement
    setVisible((prev) => !prev); // Toggle the value of visible from true to false or from false to true, using the previous value of visible
  };

  return (
    <>
      <h1>Delete Element</h1> // Render a heading
      {visible && <button onClick={removeElement}>Remove</button>} // Render a
      button only if visible is true. On click of the button, call the
      removeElement function.
    </>
  );
};

export default DeleteElement; // Export the DeleteElement component
