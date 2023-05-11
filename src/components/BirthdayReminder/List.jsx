import React from "react";

const List = ({ dataProp }) => {
  return (
    <>
      <p>{dataProp.length} Birthdays Today</p>
      <ul>
        {dataProp.map((data) => (
          <li key={data.id}>
            <h1>{data.name}</h1>
            <span>{data.age}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
