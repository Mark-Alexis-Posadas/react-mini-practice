export default function TableItem({ dispatch, state, isEditing }) {
  return (
    <>
      {state.submittedData.map((item, index) => (
        <tr className="odd:bg-slate-200" key={index}>
          <td className="p-3 text-center">{index}</td>
          <td className="p-3 text-center">{item.firstName}</td>
          <td className="p-3 text-center">{item.lastName}</td>
          <td className="p-3 text-center">{item.email}</td>
          <td className="p-3 text-center">
            <button
              className="text-white bg-blue-600 rounded p-2"
              onClick={() => dispatch({ type: "EDIT_EMPLOYEE", index })}
            >
              Edit
            </button>
            <button className="text-white bg-red-500 rounded p-2 ml-3">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
