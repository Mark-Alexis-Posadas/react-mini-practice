import React from "react";

export default function Table({ dispatch, state, handleDelete }) {
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
        {state.submittedData.map((item, idx) => (
          <tr className="odd:bg-slate-200" key={idx}>
            <td className="p-3 text-center">{idx}</td>
            <td className="p-3 text-center">{item.firstName}</td>
            <td className="p-3 text-center">{item.lastName}</td>
            <td className="p-3 text-center">{item.email}</td>
            <td className="p-3 text-center">
              <button
                className="text-white bg-blue-600 rounded p-2"
                onClick={() => dispatch({ type: "SET_EDIT_INDEX", idx })}
              >
                Edit
              </button>
              <button
                className="text-white bg-red-500 rounded p-2 ml-3"
                onClick={toggleDelete}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
