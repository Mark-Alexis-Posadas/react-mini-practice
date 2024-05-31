import React, { useState, useEffect } from "react";

const fetchData = () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

export default function PromisesOne() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((json) => {
      if (json) {
        setData(json);
      }
    });
  }, []);

  return (
    <div>
      <h1>PromisesOne</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
