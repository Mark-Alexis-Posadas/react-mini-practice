import { Categories } from "./pet/Categories";
import { Filter } from "./pet/Filter";
import { NameFiltering } from "./pet/NameFiltering";

const App = () => {
  return (
    <h1>
      <NameFiltering />
      <Categories />
      <Filter />
    </h1>
  );
};

export default App;
