import React, { useState } from "react";

// import ToggleElementLogicalOperators from "./components/ToggleElement/ToggleElementLogicalOperators";
// import ToggleElementUseToggle from "./components/ToggleElement/ToggleElementUseToggle";
// import ToggleElementTernaryOperators from "./components/ToggleElement/ToggleElementTernaryOperators";
// import ToggleElementIfStatement from "./components/ToggleElement/ToggleElementIfStatement";
// import ToggleElementCssCondition from "./components/ToggleElement/ToggleElementCssCondition.jsx";
import Card from "./components/ReUsableComponent/Card";
import exampleOfData from "./components/ReUsableComponent/data";

const App = () => {
  return (
    <div>
      <Card fuckingProps={exampleOfData} />
    </div>
  );
};

export default App;
