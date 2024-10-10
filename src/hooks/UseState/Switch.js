import React, { useState } from "react";

const Switch = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="p-10">
      <div
        className={`${
          toggle ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"
        } px-2 rounded-full w-[4rem] h-[2rem] flex items-center cursor-pointer`}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`${
            toggle ? "bg-yellow-400" : "bg-white"
          } w-[1.5rem] h-[1.5rem] rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
