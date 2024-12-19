import { useState } from "react";

const users = [
  {
    name: "alexis",
    age: 30,
  },
  {
    name: "aldrin",
    age: 28,
  },
  {
    name: "argie",
    age: 29,
  },
  {
    name: "aries",
    age: 27,
  },
  {
    name: "ems",
    age: 26,
  },
];

export default function Sort() {
  const [person, setPerson] = useState(users);

  const handleClick = () => {
    setPerson((prev) => [...prev].sort((a, b) => a.age - b.age));
  };

  return (
    <div>
      {person.map((p, index) => (
        <div key={index}>
          {p.name} age - {p.age}
        </div>
      ))}

      <button onClick={handleClick}>Sort by Age</button>
    </div>
  );
}
