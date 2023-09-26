import React from "react";

export default function FilterName() {
  const names = [
    "Jake",
    "James",
    "Juan",
    "Alexis",
    "Alex",
    "Aries",
    "Aldrin",
    "George",
    "Gerry",
  ];

  const [filterName, setFilterName] = React.useState("");

  const handleChange = (e) => {
    setFilterName(e.target.value);
  };

  const filteredNames = names.filter((n) =>
    n.toLowerCase().startsWith(filterName.toLowerCase())
  );

  return (
    <div>
      <h1>Filter Names</h1>
      <input
        type="text"
        placeholder="Enter a name"
        onChange={handleChange}
        value={filterName}
        className="form-control"
      />

      {filteredNames.length === 0 ? (
        <p>No names found</p>
      ) : (
        <ul>
          {filteredNames.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
