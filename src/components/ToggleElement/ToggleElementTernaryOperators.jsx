import React, { useState } from "react";

const ToggleElementTernaryOperators = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button onClick={handleClick}>Toggle State</button>
      {toggle ? (
        <ul>
          <li>An item</li>
          <li>A second item</li>
          <li>A third item</li>
          <li>A fourth item</li>
          <li>And a fifth one</li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ToggleElementTernaryOperators;
