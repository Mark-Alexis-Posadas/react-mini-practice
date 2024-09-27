import React from "react";
import { useState } from "react";
const images = [
  "https://64.media.tumblr.com/e03f1411edfd276553c14f1fea127d07/tumblr_pkozjmikSj1w6wy64_640.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f3c06b9-d9cc-477c-8a58-699b9bc07e57/d5dkbaf-72d85ef9-1af4-48d7-a1f3-db18569f5f3e.jpg/v1/fit/w_469,h_679,q_70,strp/gerard_way__editted_version__by_barbaraway_d5dkbaf-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njc5IiwicGF0aCI6IlwvZlwvNGYzYzA2YjktZDljYy00NzdjLThhNTgtNjk5YjliYzA3ZTU3XC9kNWRrYmFmLTcyZDg1ZWY5LTFhZjQtNDhkNy1hMWYzLWRiMTg1NjlmNWYzZS5qcGciLCJ3aWR0aCI6Ijw9NDY5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qzsNs8Vc3AneUySSVJXSlSETfm7CDCd1QZBbp1C5HSE",
  "https://64.media.tumblr.com/f3ea975839fe431c5cd973a05706aa35/576337e07a60aec8-2e/s1280x1920/07b3a506f93035a51aa1ce3a72fac1b20b394fd4.jpg",
];
const App = () => {
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    if (active === 0) return;
    setActive((prev) => prev - 1);
  };

  const handleNext = () => {
    if (active === 2) return;

    setActive((prev) => prev + 1);
  };

  return (
    <div className="p-20">
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className={active === 0 && "cursor-not-allowed"}
        >
          prev
        </button>
        <div className="flex flex-col">
          {images.map((item, index) => (
            <img
              className={`${
                index === active ? "block" : "hidden"
              } rounded object-cover w-[120px] h-[120px]`}
              src={item}
              key={index}
              alt="g"
            />
          ))}

          {images.map((_, index) => (
            <span
              className={`${
                active === index ? "bg-green-500" : "bg-gray-200"
              }  rounded-full w-10 h-10`}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={active === 2 && "cursor-not-allowed"}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
