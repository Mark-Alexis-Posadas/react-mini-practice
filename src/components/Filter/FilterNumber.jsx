import React from "react";

export const FilterNumber = () => {
  const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [filterValue, setFilterValue] = React.useState("");
  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filterdNumbers = listNumbers.filter(
    (number) => number > parseInt(filterValue)
  );

  return (
    <div className="container mt-5">
      <h1>Filter Number</h1>
      <p>
        Create a React component with a list of numbers and an input field. When
        the user enters a number, use the filter method to display the numbers
        that are greater than the user's input number.
      </p>
      <input
        className="form-control"
        type="number"
        value={filterValue}
        onChange={handleChange}
        placeholder="Enter a number"
      />

      <ul>
        {filterdNumbers.map((num, idx) => (
          <li key={idx}>{num}</li>
        ))}
      </ul>
    </div>
  );
};
