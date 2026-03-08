import { useEffect, useState } from "react";

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      console.log("window resize", window);
      const width = window.innerWidth;
      setWindowSize(width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h1>{windowSize}</h1>
    </div>
  );
};

export default App;
