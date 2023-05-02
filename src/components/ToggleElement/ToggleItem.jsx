import React, { useState } from "react";

const ToggleItem = ({ description, active }) => {
  const [show, setShow] = useState(active);
  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
      {show && <div>{description}</div>}
    </div>
  );
};

export default ToggleItem;
