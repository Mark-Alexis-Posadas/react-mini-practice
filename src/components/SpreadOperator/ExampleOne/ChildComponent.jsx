import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
};

export default ChildComponent;
