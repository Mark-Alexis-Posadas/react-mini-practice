import React from "react";

const MyComponent = ({ name, hobbies, favoriteAlcohol }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Hobbies: {hobbies}</p>
      <p>Favorite Alcohol: {favoriteAlcohol}</p>
    </div>
  );
};

export default MyComponent;
