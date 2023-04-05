import React, { useState } from "react";

const ToggleElementCssCondition = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <ul style={{ display: toggle ? "block" : "none" }}>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
    </div>
  );
};

export default ToggleElementCssCondition;
