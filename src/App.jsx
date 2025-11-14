import { useState } from "react";
import Employee from "./components/AddEmployee/Employee";

export const users = [
  { id: 1, name: "Alex", age: 22, gender: "Male", status: "active" },
  { id: 2, name: "Bianca", age: 28, gender: "Female", status: "inactive" },
  { id: 3, name: "Carlo", age: 19, gender: "Male", status: "active" },
  { id: 4, name: "Diana", age: 25, gender: "Female", status: "active" },
  { id: 5, name: "Evan", age: 32, gender: "Male", status: "inactive" },
];

const App = () => {
  const [filteredActiveUser, setFilteredActiveUser] = useState(users);
  const [value, setValue] = useState("all");
  const handleChange = (e) => {
    const selectedStatus = e.target.value;

    setValue(selectedStatus);

    if (selectedStatus === "all") {
      setFilteredActiveUser(users);
    } else {
      const result = users.filter((user) => user.status === selectedStatus);
      setFilteredActiveUser(result);
    }
  };

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

  const active = users.filter((user) => user.status === "active").length;

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option value="all">all</option>
        <option value="inactive">inactive</option>
        <option value="active">active</option>
      </select>
      <h1>USER'S ACTIVE: {active}</h1>
      <div className="grid grid-cols-3 gap-4">
        {filteredActiveUser.map((user) => (
          <div
            key={user.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between transition-all hover:shadow-lg"
          >
            <div>
              <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {user.name}
              </h1>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full">
                  {user.gender}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-white ${
                    user.status === "active"
                      ? "bg-green-500"
                      : user.status === "inactive"
                      ? "bg-gray-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {user.status}
                </span>
                <span>{user.age}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => handleSort("ascending")}>ascending</button>
        <button onClick={() => handleSort("desceding")}>desceding</button>
        <button onClick={() => handlShowFemale("female")}>
          show only female users
        </button>
      </div>

      <Employee />
    </div>
  );
};

export default App;
