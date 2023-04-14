import React, { useEffect, useState } from "react";
import Greet from "./Greet";
const url = "https://jsonplaceholder.typicode.com/posts";
const Root = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setValue(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <>
      {/* <Greet firstName="Mark Alexis" middleName="Petrola" lastName="Posadas" /> */}
      <Greet values={value} />
    </>
  );
};

export default Root;
