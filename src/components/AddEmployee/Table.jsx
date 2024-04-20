import React from "react";

export default function Table({ toggleEdit }) {
  return (
    <table className="w-full">
      <thead className="bg-slate-50">
        <tr>
          <th className="p-3 text-black">#</th>
          <th className="p-3 text-black">First Name</th>
          <th className="p-3 text-black">Last Name</th>
          <th className="p-3 text-black">Email</th>
          <th className="p-3 text-black">Action</th>
        </tr>
      </thead>

      <tbody className="w-full">
        <tr className="odd:bg-slate-200">
          <td className="p-3 text-center">1</td>
          <td className="p-3 text-center">Mark Alexis</td>
          <td className="p-3 text-center">Posadas</td>
          <td className="p-3 text-center">Email</td>
          <td className="p-3 text-center">
            <button
              className="text-white bg-blue-600 rounded p-2"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button className="text-white bg-red-500 rounded p-2 ml-3">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="p-3 text-center">1</td>
          <td className="p-3 text-center">Mark Alexis</td>
          <td className="p-3 text-center">Posadas</td>
          <td className="p-3 text-center">Email</td>
          <td className="p-3 text-center">
            <button className="text-white bg-blue-600 rounded p-2">Edit</button>
            <button className="text-white bg-red-500 rounded p-2 ml-3">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
