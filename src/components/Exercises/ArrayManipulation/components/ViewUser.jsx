const ViewUser = ({ selectedUser, setIsToggleViewUser }) => {
  if (!selectedUser) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-[360px] bg-white border border-gray-200 rounded-xl shadow-xl p-6">
        {/* Close Button */}
        <button
          onClick={() => setIsToggleViewUser(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 transition text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">
          User Details
        </h2>

        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-3 text-gray-700 text-sm">
          <p>
            <span className="font-semibold text-gray-600">Name:</span>{" "}
            {selectedUser.name}
          </p>

          <p>
            <span className="font-semibold text-gray-600">Gender:</span>{" "}
            {selectedUser.gender}
          </p>

          <p className="flex items-center gap-2">
            <span className="font-semibold text-gray-600">Status:</span>

            <span
              className={`px-3 py-1 rounded-full text-xs text-white ${
                selectedUser.status === "active"
                  ? "bg-green-500"
                  : "bg-gray-500"
              }`}
            >
              {selectedUser.status}
            </span>
          </p>

          <p>
            <span className="font-semibold text-gray-600">Age:</span>{" "}
            {selectedUser.age}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
