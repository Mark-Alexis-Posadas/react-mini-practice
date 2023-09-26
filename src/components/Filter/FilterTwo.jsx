import React from "react";

const personalInformation = [
  {
    firstName: "Jake",
    age: 17,
  },
  {
    firstName: "Juan",
    age: 18,
  },
  {
    firstName: "Daniel",
    age: 19,
  },
  {
    firstName: "Alex",
    age: 20,
  },
];
export const FilterTwo = () => {
  return (
    <div>
      {personalInformation
        .filter((person) => person.age > 18)
        .map((filterNames, idx) => (
          <li key={idx}>{filterNames.firstName}</li>
        ))}
    </div>
  );
};
