import React, { useState } from "react";

const SearchFilter = () => {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterList, setFilterList] = useState(list);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setFilterList(list);
      return;
    }

    const filteredValues = list.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  return (
    <>
      <h1> SearchFilter</h1>
      <input
        type="text"
        name="query"
        onChange={handleChange}
        placeholder="filter"
      />

      {filterList &&
        filterList.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
};

export default SearchFilter;
