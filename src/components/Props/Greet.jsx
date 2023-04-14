import React from "react";

const Greet = ({ values }) => {
  //Or i you use prop, use prop.value to map
  return (
    <>
      {values.map((val) => {
        const { id, title, body } = val;
        return (
          <div key={id}>
            <h1> {title}</h1>

            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Greet;
