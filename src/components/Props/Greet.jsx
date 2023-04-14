import React from "react";

const Greet = (tagaPasaNgData) => {
  const { value } = tagaPasaNgData;
  return (
    <>
      {value.map((val) => {
        const { id, title, body } = val;
        return (
          <div key={id}>
            {title}
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Greet;
