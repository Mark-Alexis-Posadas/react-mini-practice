import { useState, useEffect } from "react";
const data = [
  {
    id: 1,
    bgColor: "bg-green-600",
  },
  {
    id: 2,
    bgColor: "bg-purple-600",
  },
  {
    id: 3,
    bgColor: "bg-yellow-600",
  },

  {
    id: 4,
    bgColor: "bg-red-600",
  },
];

const Theme = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme"));

  const handleClick = (themeColor) => {
    setTheme(themeColor);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className={`w-full h-[350px] ${theme}`}></div>

      <div className="bg-slate-50 p-2 rounded shadow-md flex items-center">
        {data.map((item) => (
          <button
            key={item.id}
            className={`text-white w-10 h-10 rounded-full mr-2 ${item.bgColor}`}
            style={theme === item.bgColor ? { border: "3px solid #222" } : {}}
            onClick={() => handleClick(item.bgColor)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default Theme;
