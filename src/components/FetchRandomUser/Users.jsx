import React from "react";

const Users = ({ userProps }) => {
  return (
    <div className="container">
      <div className="card" key={userProps.id}>
        <h3 className="card-title">{userProps.title}</h3>
        <p className="card-text">{userProps.body}</p>
      </div>
    </div>
  );
};

export default Users;
