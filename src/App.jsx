import React from "react";
import Counter from "./custom-hooks/pages/Counter";
import ToggleDarkMode from "./custom-hooks/pages/ToggleDarkMode";
import NavToggle from "./custom-hooks/pages/NavToggle";

const App = () => {
  return (
    <>
      <Counter />
      <ToggleDarkMode />
      <NavToggle />
    </>
  );
};

export default App;
