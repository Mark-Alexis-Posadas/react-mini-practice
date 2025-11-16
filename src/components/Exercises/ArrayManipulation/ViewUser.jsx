const ViewUser = ({ selectedUser, setIsToggleViewUser }) => {
  if (!selectedUser) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative w-[350px] bg-gray-900 border-2 border-cyan-500 rounded-lg shadow-[0_0_25px_#06b6d4] p-6 animate-scaleIn text-white font-mono">
        {/* Close Button */}
        <button
          onClick={() => setIsToggleViewUser(false)}
          className="absolute top-2 right-3 text-white text-xl hover:text-cyan-400 transition"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold tracking-wider text-cyan-400 mb-4">
          PLAYER PROFILE
        </h2>

        <div className="border border-cyan-500 rounded-md p-4 bg-cyan-500/10 space-y-2">
          <p>
            <span className="text-cyan-400 font-semibold">Name:</span>
            {selectedUser.name}
          </p>

          <p>
            <span className="text-cyan-400 font-semibold">Gender:</span>
            {selectedUser.gender}
          </p>

          <p>
            <span className="text-cyan-400 font-semibold">Status:</span>
            <span
              className={`${
                selectedUser.status === "active"
                  ? "text-white bg-green-500"
                  : "text-slate-100 bg-gray-500"
              } ml-1 py-1 px-3 rounded-full text-xs`}
            >
              {selectedUser.status}
            </span>
          </p>

          <p>
            <span className="text-cyan-400 font-semibold">Age:</span>
            {selectedUser.age}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
