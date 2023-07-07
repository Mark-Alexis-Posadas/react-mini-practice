import React, { useState } from "react";
import "../../styles/accordion.css";
import accordionData from "./data";

export default function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(accordionData[0].id);

  const toggleAccordion = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  return (
    <>
      {accordionData.map((data) => {
        const isActive = data.id === activeAccordion;

        return (
          <div className="accordion" key={data.id}>
            <h1
              className={`bg-primary text-white accordion__title ${
                isActive ? "active" : ""
              }`}
              onClick={() => toggleAccordion(data.id)}
            >
              {data.title}
            </h1>
            {isActive && <p className="accordion__body">{data.body}</p>}
          </div>
        );
      })}
    </>
  );
}
