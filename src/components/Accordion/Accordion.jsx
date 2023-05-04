import React, { useState } from "react";
import "../../styles/accordion.css";
export default function Accordion({ h1, p, active }) {
  const [show, setShow] = useState(active);
  return (
    <>
      <div className="accordion">
        <h1
          className="accordion__title"
          onClick={() => setShow((prev) => !prev)}
        >
          {h1}
        </h1>
        {show && <p className="accordion__body">{p}</p>}
      </div>
    </>
  );
}
