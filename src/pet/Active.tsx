import { useState } from "react";
import { REST_API } from "../exercises/data";
export const Active = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <ul className="p-20 bg-slate-100">
      {REST_API.map((item, index) => (
        <li
          key={index}
          className={`${
            index === active && "bg-white text-purple-600 shadow-md"
          } text-md my-3 border border-slate-300 p-3 cursor-pointer`}
          onClick={() => handleClick(index)}
        >
          {index === 1 && active === 1 ? "fucker" : item.name}
        </li>
      ))}
    </ul>
  );
};
