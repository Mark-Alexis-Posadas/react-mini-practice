import { useState } from "react";
import { users } from "./data";

const Navbar = ({
  value,
  handleChange,
  active,
  filteredActiveUser,
  setFilteredActiveUser,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("ascending");
  const [sortGender, setSortGender] = useState("all");

  const handleSearchName = (e) => {
    setSearchValue(e.target.value);
    const filteredName = users.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredActiveUser(filteredName);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    if (e.target.value === "ascending") {
      const sorted = [...filteredActiveUser].sort((a, b) => a.age - b.age);
      setFilteredActiveUser(sorted);
    } else {
      const sorted = [...filteredActiveUser].sort((a, b) => b.age - a.age);
      setFilteredActiveUser(sorted);
    }
  };

  const handleSortGender = (e) => {
    setSortGender(e.target.value);
    if (e.target.value === "all") {
      setFilteredActiveUser(users);
    } else {
      const result = users.filter(
        (user) => user.gender.toLowerCase() === e.target.value.toLowerCase()
      );
      setFilteredActiveUser(result);
    }
  };

  return (
    <nav className="w-full px-6 py-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-lg flex items-center justify-between">
      {/* LEFT SIDE */}
      <div className="text-purple-400 font-bold text-xl tracking-wide">
        <input
          onChange={handleSearchName}
          value={searchValue}
          type="text"
          placeholder="search by name"
          className="px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      </div>

      <ul className="flex items-center space-x-6">
        <span className="text-white"> filter by:</span>

        <div className="flex items-center gap-4">
          <select
            value={sort}
            onChange={handleSort}
            className="px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          >
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
          <select
            value={sortGender}
            onChange={handleSortGender}
            className="px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          >
            <option value="all">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <select
            value={value}
            onChange={handleChange}
            className="px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          >
            <option value="all">All</option>
            <option value="inactive">Inactive</option>
            <option value="active">Active</option>
          </select>
        </div>

        <h1 className="text-purple-300 font-semibold tracking-wide">
          USER'S ACTIVE:
          <span className="text-purple-400 font-bold">{active}</span>
        </h1>
      </ul>
    </nav>
  );
};

export default Navbar;
