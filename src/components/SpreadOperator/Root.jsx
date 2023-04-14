import React from "react";
import MyComponent from "./ExampleOne/MyComponent";
import Map from "./Map";

const Root = () => {
  const props = {
    name: "Mark Alexis Posadas",
    hobbies: "racing pigeons",
    favoriteAlcohol: "beer",
  };

  return (
    <div>
      <MyComponent {...props} />
      <Map />
    </div>
  );
};

export default Root;
