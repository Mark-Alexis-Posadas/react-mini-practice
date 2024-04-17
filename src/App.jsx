import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (value.trim() === "") {
      e.preventDefault();
      alert("enter text");
      return;
    }
    e.preventDefault();
    // Update the submitted value when the form is submitted
    setSubmittedValue([...submittedValue, value]);
    // Clear the input field after submission
    setValue("");
  };

  const handleDelete = (index) => {
    const newState = submittedValue.filter((_, idx) => idx !== index);
    setSubmittedValue(newState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-red-200"
          placeholder="enter text"
          name="enterText"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>

      {/* Render the submitted values only if it's not empty */}
      {submittedValue.length > 0 && (
        <div>
          {submittedValue.map((item, idx) => (
            <div key={idx}>
              {item}
              <button onClick={() => handleDelete(idx)}>delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
