import React from "react";
import TableItem from "./TableItem";

export default function Table({ dispatch, state }) {
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
        <TableItem dispatch={dispatch} state={state} />
      </tbody>
    </table>
  );
}
