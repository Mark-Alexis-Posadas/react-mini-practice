import React, { useState } from "react";
import "./index.css";
import Accordion from "./components/Accordion/Accordion";
import data from "./components/Accordion/data.js";
const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Accordion data={data} />
    </>
  );
};

export default App;
