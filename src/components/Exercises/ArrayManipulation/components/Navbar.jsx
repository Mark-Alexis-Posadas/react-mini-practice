import { useState, useEffect } from "react";
import { users } from "../data/data";

const Navbar = ({
  active,

  setFilteredActiveUser,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("ascending");
  const [gender, setGender] = useState("all");
  const [status, setStatus] = useState("all");

  // 🔥 COMBINATION FILTER FUNCTION (MAIN MAGIC)
  const applyFilters = () => {
    let filtered = [...users];

    // 1️⃣ STATUS FILTER
    if (status !== "all") {
      filtered = filtered.filter((user) => user.status === status);
    }

    // 2️⃣ GENDER FILTER
    if (gender !== "all") {
      filtered = filtered.filter(
        (user) => user.gender.toLowerCase() === gender.toLowerCase()
      );
    }

    // 3️⃣ SEARCH FILTER
    if (searchValue.trim() !== "") {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // 4️⃣ SORT BY AGE
    filtered.sort((a, b) =>
      sort === "ascending" ? a.age - b.age : b.age - a.age
    );

    setFilteredActiveUser(filtered);
  };

  // 🔥 Every time a filter changes → apply filters
  useEffect(() => {
    applyFilters();
  }, [searchValue, sort, gender, status]);

  return (
    <nav className="w-full px-6 py-4 bg-white border-b shadow-sm flex items-center justify-between">
      {/* SEARCH */}
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search name..."
        className="px-3 py-2 border rounded-lg"
      />

      <div className="flex items-center gap-4">
        {/* SORT */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="ascending">Age: Low → High</option>
          <option value="descending">Age: High → Low</option>
        </select>

        {/* GENDER */}
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="all">Gender: All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        {/* STATUS */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="all">Status: All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* COUNTER */}
      <h1>
        Active Users:
        <span className="font-bold text-blue-600">{active}</span>
      </h1>
    </nav>
  );
};

export default Navbar;
