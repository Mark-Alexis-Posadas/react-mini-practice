import React from "react";
import { useFetch } from "../hooks/useFetch";

const JsonPlaceholder = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex items-center">
      {data.map((item) => {
        const { id, name, username, email } = item;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <span>{username}</span> {/* Fixed typo: userName -> username */}
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JsonPlaceholder;
