import React from "react";

export default function Item({
  index,
  name,
  age,
  gender,
  occupation,
  city,
  country,
  activeList,
  handleEdit,
  handleDelete,
}) {
  return (
    <tr
      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
      key={index}
    >
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{age}</td>
      <td className="px-6 py-4">{gender}</td>
      <td className="px-6 py-4">{occupation}</td>
      <td className="px-6 py-4">{city}</td>
      <td className="px-6 py-4">{country}</td>
      <td className="px-6 py-4">
        <div className="flex item-center gap-3">
          <button
            className="text-blue-600 font-bold text-sm"
            onClick={() => handleEdit(index)}
          >
            Edit
          </button>
          <button
            className="text-red-600 font-bold text-sm"
            onClick={() => handleDelete(index)}
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
}
