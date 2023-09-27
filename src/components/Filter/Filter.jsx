import React, { useState } from "react";
import { FilterTwo } from "./FilterTwo";
import { FilterNumber } from "./FilterNumber";
import FilterName from "./FilterName";
import FilterTaskList from "./FilterTaskList";
import { FilterSorting } from "./FilterSorting";

export default function Filter() {
  // const names = ["James", "John", "Paul", "Ringo", "George"];
  // const [state, setState] = React.useState(names);
  // const handleClick = () => {
  //   setState(names.filter((n) => n.includes("J")));
  // };
  return (
    <>
      {/* <ul>
        {state.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>
        Filter Name
      </button> */}

      {/* <FilterTwo /> */}
      {/* <FilterNumber /> */}
      {/* <FilterName /> */}
      {/* <FilterTaskList /> */}
      <FilterSorting />
    </>
  );
}
