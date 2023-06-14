import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  const NewComponent = () => {
    const initialValue = 0;
    const [counter, setCounter] = useState(initialValue);

    const handleIncrement = () => {
      setCounter(counter + 1);
    };

    const handleDecrement = () => {
      setCounter(counter - 1);
    };

    const handleReset = () => {
      setCounter(initialValue);
    };

    return (
      <OriginalComponent
        counter={counter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    );
  };

  return NewComponent;
};

export default UpdatedComponent;
