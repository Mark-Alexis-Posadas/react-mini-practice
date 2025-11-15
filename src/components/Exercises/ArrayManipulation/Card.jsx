const Card = ({ user }) => {
  return (
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
  );
};

export default Card;
