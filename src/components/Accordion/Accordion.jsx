import React, { useState } from "react";

import accordionData from "./data";

export default function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <>
      {accordionData.map((data, index) => {
        const isActive = index === activeAccordion;

        return (
          <div className="" key={index}>
            <div
              className={`p-3 mb-3 flex items-center justify-between bg-slate-50 shadow-md accordion__title ${
                isActive && "active"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <h1 className="h5">{data.title}</h1>
              <span className="text-black">{isActive ? "+" : "-"}</span>
            </div>

            {isActive && <p className="accordion__body">{data.body}</p>}
          </div>
        );
      })}
    </>
  );
}
