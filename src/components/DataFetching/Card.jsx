import React from "react";

const Card = ({ post }) => {
  return (
    <>
      {post.map((p) => {
        return (
          <div className="card" key={p.id}>
            <div className="card-body">
              <h1 className="card-title">{p.title}</h1>
              <p className="card-text">{p.body}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
