import React from "react";
import "./index.css";
import CounterOne from "./components/Hoc/CounterOne";
import CounterTwo from "./components/Hoc/CounterTwo";

const App = () => {
  return (
    <>
      <CounterOne />
      <CounterTwo />
    </>
  );
};

export default App;
