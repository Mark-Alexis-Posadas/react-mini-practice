import React, { useState } from "react";
import List from "./List";

const BirthdayReminder = () => {
  const initialState = [
    { id: 1, name: "Bertie Yates", age: "29 years" },
    { id: 2, name: "Hester Hogan", age: "32 years" },
    { id: 3, name: "Larry Little", age: "36 years" },
    { id: 4, name: "Sean Walsh", age: "34 years" },
    { id: 5, name: "Lola Gardner", age: "34 years" },
  ];

  const [data, setData] = useState(initialState);

  const handleClearAll = () => {
    setData([]);
  };

  return (
    <div className="container text-center mt-5">
      <List dataProp={data} />
      <button className="btn btn-danger" onClick={handleClearAll}>
        Clear all
      </button>
    </div>
  );
};

export default BirthdayReminder;
