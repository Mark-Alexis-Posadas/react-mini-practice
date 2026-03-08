const Card = ({ user, onEdit, onDelete, onView }) => {
  return (
    <div
      key={user.id}
      className="bg-white shadow-md p-4 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="mb-3">
        <h1 className="text-lg font-semibold text-gray-800">{user.name}</h1>

        <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
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

      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={() => onView(user)}
          className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          View
        </button>

        <button
          onClick={() => onEdit(user)}
          className="px-3 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(user.id)}
          className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
