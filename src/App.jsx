import React from "react";
import Counter from "./custom-hooks/pages/Counter";
import ToggleDarkMode from "./custom-hooks/pages/ToggleDarkMode";
import NavToggle from "./custom-hooks/pages/NavToggle";
import JsonPlaceholder from "./custom-hooks/pages/JsonPlaceholder";
import FakeStore from "./custom-hooks/pages/FakeStoreApi";

const App = () => {
  return (
    <div className="p-20">
      {/* <Counter />
      <ToggleDarkMode />
      <NavToggle /> */}
      <JsonPlaceholder />
      <FakeStore />
    </div>
  );
};

export default App;
