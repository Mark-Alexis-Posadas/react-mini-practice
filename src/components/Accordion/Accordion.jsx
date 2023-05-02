import React from "react";
import "../../styles/accordion.css";
export default function Accordion({ data }) {
  return (
    <>
      {data.map((d) => (
        <details key={d.id}>
          <summary>{d.title}</summary>
          <p>{d.body}</p>
        </details>
      ))}
    </>
  );
}
