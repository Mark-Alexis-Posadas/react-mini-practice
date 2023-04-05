import React, { useState } from "react";

const ToggleElementIfStatement = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  if (toggle) {
    return (
      <div>
        <button onClick={handleClick}>Toggle State</button>
        <ul>
          <li>An item</li>
          <li>A second item</li>
          <li>A third item</li>
          <li>A fourth item</li>
          <li>And a fifth one</li>
        </ul>
      </div>
    );
  } else {
    return <button onClick={handleClick}>Toggle State</button>;
  }
};

export default ToggleElementIfStatement;
