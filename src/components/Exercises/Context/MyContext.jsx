import { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const handleClick = (index) => {
    if (index === 0) {
      setCount((prev) => prev + 1);
    } else if ((index = 1)) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <MyContext.Provider value={{ count, setCount, handleClick }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
