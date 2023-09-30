import React, { useState } from "react";

export const Palindrome = () => {
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;

    setResult(inputText);

    const len = inputText.length;

    for (let i = 0; i < len / 2; i++) {
      if (inputText[i] !== inputText[len - 1 - i]) {
        setResult("Not Palindrome");
        return;
      }
    }

    setResult("Palindrome");
  };

  return (
    <div className="container mt-5">
      <h1>Check Whether a String is Palindrome or Not</h1>
      <p>
        A string is a palindrome if it is read the same from forward or
        backward. For example, dad reads the same either from forward or
        backward. So the word dad is a palindrome. Similarly, madam is also a
        palindrome.
      </p>

      <p>{result}</p>
      <input
        type="text"
        className="form-control"
        placeholder="enter text"
        onChange={handleChange}
      />
    </div>
  );
};
