import { useState } from "react";
import { Link } from "react-router-dom";
import { users } from "./data";
import {
  UserIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowRightIcon,
  LayoutGridIcon,
  TableIcon,
} from "lucide-react";

export default function Home() {
  const [view, setView] = useState("card"); // 'card' or 'table'

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        User Directory
      </h1>

      {/* View Tabs */}
      <div className="flex justify-center mb-6 gap-4">
        <button
          onClick={() => setView("card")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            view === "card"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 border border-gray-300"
          }`}
        >
          <LayoutGridIcon className="w-4 h-4" />
          Card View
        </button>
        <button
          onClick={() => setView("table")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            view === "table"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 border border-gray-300"
          }`}
        >
          <TableIcon className="w-4 h-4" />
          Table View
        </button>
      </div>

      {/* Card View */}
      {view === "card" && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border border-gray-100  dark:border-slate-700"
            >
              <div className="flex items-center mb-4">
                <UserIcon className="w-6 h-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {user.name}
                </h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2 text-gray-400" />
                  Age: {user.age}
                </div>
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-2 text-gray-400" />
                  Gender: {user.gender}
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2 text-gray-400" />
                  Address: {user.address}
                </div>
              </div>
              <Link
                to={`/user/${user.id}`}
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition font-medium text-sm"
              >
                View Details <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {view === "table" && (
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden shadow dark:border-gray-700">
            <thead className="bg-gray-100 text-gray-700 text-left dark:bg-slate-700 dark:text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Age</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Address</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-slate-800 dark:text-white"
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.age}</td>
                  <td className="p-3">{user.gender}</td>
                  <td className="p-3">{user.address}</td>
                  <td className="p-3">
                    <Link
                      to={`/user/${user.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
