import { users } from "./data";

const Navbar = ({
  value,
  handleChange,
  active,
  filteredActiveUser,
  setFilteredActiveUser,
}) => {
  const handleSort = (sort) => {
    if (sort === "ascending") {
      const sorted = [...filteredActiveUser].sort((a, b) => a.age - b.age);
      setFilteredActiveUser(sorted);
    } else {
      const sorted = [...filteredActiveUser].sort((a, b) => b.age - a.age);
      setFilteredActiveUser(sorted);
    }
  };

  const handlShowFemale = (gender) => {
    const result = users.filter(
      (user) => user.gender.toLowerCase() === gender.toLowerCase()
    );
    setFilteredActiveUser(result);
  };

  return (
    <nav className="w-full px-6 py-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-lg flex items-center justify-between">
      {/* LEFT SIDE */}
      <div className="text-purple-400 font-bold text-xl tracking-wide">
        Home
      </div>

      <ul className="flex items-center space-x-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleSort("ascending")}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            ascending
          </button>

          <button
            onClick={() => handleSort("descending")}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            descending
          </button>

          <button
            onClick={() => handlShowFemale("female")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            show only female users
          </button>
        </div>
        <select
          value={value}
          onChange={handleChange}
          className="px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        >
          <option value="all">All</option>
          <option value="inactive">Inactive</option>
          <option value="active">Active</option>
        </select>

        <h1 className="text-purple-300 font-semibold tracking-wide">
          USER'S ACTIVE:{active}
          <span className="text-purple-400 font-bold">{active}</span>
        </h1>
      </ul>
    </nav>
  );
};

export default Navbar;
