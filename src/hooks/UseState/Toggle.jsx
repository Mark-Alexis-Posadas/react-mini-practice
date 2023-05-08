import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleText, setToggleText] = useState("Off");

  const handleClick = () => {
    setToggle(!toggle);
    setToggleText(toggle ? "Off" : "On");
  };

  return (
    <div className="mt-5 text-center">
      <button className="btn btn-primary" onClick={handleClick}>
        {toggleText}
      </button>
      {toggle && <h1>Toggle...</h1>}
    </div>
  );
};

export default Toggle;
