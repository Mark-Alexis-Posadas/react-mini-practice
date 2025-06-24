import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Profile/Home";
import Details from "../components/Profile/Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
export const GradeSixB = () => {
  const [inputVal, setInputVal] = useState("");
  const [toggleTheme, setToggleTheme] = useState(false);
  const handleSearch = (e) => {
    setInputVal(e.target.value);
  };

  const handleSearchSubmit = () => {};

  const handleToggleTheme = () => {
    setToggleTheme(!toggleTheme);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-50 dark:bg-slate-800 shadow-md  gap-6 md:gap-4">
        <h1 className="font-bold text-lg text-gray-800 dark:text-gray-100">
          Grade 6 - B, Batch 2005 - 2006
        </h1>
        <form onSubmit={handleSearchSubmit}>
          <div className="flex items-center gap-2">
            <input
              value={inputVal}
              onChange={handleSearch}
              type="text"
              placeholder="Search profile"
              className="px-4 py-2 rounded-lg border border-gray-300  dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white dark:bg-slate-700 dark:text-white"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm transition"
            >
              Search
            </button>
          </div>
        </form>
        <ul className="flex items-center gap-4 text-sm">
          <li className="text-green-600 dark:text-green-400 font-medium hover:underline cursor-pointer">
            Home
          </li>
          <li className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:underline cursor-pointer">
            About
          </li>
          <li className="text-gray-700 dark:text-gray-300">
            <button onClick={handleToggleTheme}>
              <FontAwesomeIcon icon={toggleTheme ? faMoon : faSun} />
            </button>
          </li>
        </ul>
      </div>

      <Router>
        <div className="p-6 bg-gray-100 dark:bg-slate-900 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
