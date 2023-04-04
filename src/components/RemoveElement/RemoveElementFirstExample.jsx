import React, { useState } from "react";

const DeleteElement = () => {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <h1>Delete Element</h1>

      {visible && <button onClick={removeElement}>Remove</button>}
    </>
  );
};

export default DeleteElement;
