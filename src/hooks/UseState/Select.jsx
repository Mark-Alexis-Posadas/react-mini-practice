import { useState } from "react";

const initialState = ["apple", "banana", "orange"];
export default function Select() {
  const [fruits, setFruits] = useState(initialState);
  const [active, setActive] = useState(0);

  return (
    <div className="flex items-center gap-3">
      <ul>
        <li>{fruits[active]}</li>
      </ul>
      <select
        value={fruits[active]}
        onChange={() => setActive((prev) => (prev + 1) % fruits.length)}
      >
        {fruits.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
