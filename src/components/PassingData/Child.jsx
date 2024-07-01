import React from "react";

export default function Child({ firstName, middleName, lastName, age }) {
  return (
    <div>
      <h1>
        {firstName} {middleName} {lastName}
      </h1>
      <p>{age}</p>
    </div>
  );
}
