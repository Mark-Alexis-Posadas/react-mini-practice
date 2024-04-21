export default function TableItem({ dispatch, state, handleDelete }) {
  return (
    <>
      {state.submittedData.map((item, idx) => (
        <tr className="odd:bg-slate-200" key={idx}>
          <td className="p-3 text-center">{idx}</td>
          <td className="p-3 text-center">{item.firstName}</td>
          <td className="p-3 text-center">{item.lastName}</td>
          <td className="p-3 text-center">{item.email}</td>
          <td className="p-3 text-center">
            <button
              className="text-white bg-blue-600 rounded p-2"
              onClick={() => dispatch({ type: "EDIT_EMPLOYEE", idx })}
            >
              Edit
            </button>
            <button
              className="text-white bg-red-500 rounded p-2 ml-3"
              onClick={() => handleDelete(idx)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
