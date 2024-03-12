import { MyContextProvider } from "./MyContext";
import ChildComponent from "./ChildComponent";
export default function Root() {
  return (
    <MyContextProvider>
      <ChildComponent />
    </MyContextProvider>
  );
}
