import React, { useState, useRef, useEffect } from "react";

const Form = () => {
  const [val, setVal] = useState([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    setVal([...val, inputRef.current.value]); // set value
    inputRef.current.value = ""; // clear the input field
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setVal([...val, inputRef.current.value]); // set value
      inputRef.current.value = ""; // clear the input field
    }
  };

  const handleRemove = (index) => {
    const newValues = [...val];
    newValues.splice(index, 1);
    setVal(newValues);
  };

  return (
    <div className="container mt-5">
      {val.map((value, index) => (
        <div
          key={index}
          className="d-flex align-items-center justify-content-between alert-success alert"
        >
          <p className="m-0 mb-1 lead white">{value}</p>
          <button
            className="btn btn-danger ms-2"
            onClick={() => handleRemove(index)}
          >
            x
          </button>
        </div>
      ))}
      <div className="d-flex align-items-center mt-5">
        <input
          placeholder="Enter any text"
          className="form-control"
          id="message"
          name="message"
          type="text"
          ref={inputRef}
          onKeyDown={handleKeydown}
        />
        <button className="btn btn-primary ms-2" onClick={handleClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Form;
