import React from "react";

const Card = ({ exampleOfData }) => {
  return (
    <>
      {exampleOfData.map((data) => {
        const { userId, id, title, body } = data;
        return (
          <article key={id} className="data">
            <p>{userId}</p>
            <h1>{title}</h1>
            <p>{body}</p>
          </article>
        );
      })}
    </>
  );
};

export default Card;
