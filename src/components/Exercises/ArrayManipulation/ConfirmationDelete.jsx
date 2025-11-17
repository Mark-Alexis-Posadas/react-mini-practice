const ConfirmationDelete = ({ onProceed, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.7)] rounded-lg p-6 w-80 text-center">
        <h2 className="text-red-500 text-2xl font-extrabold tracking-wider mb-4 drop-shadow-[0_0_6px_rgba(255,0,0,0.8)]">
          Delete Item?
        </h2>

        <p className="text-gray-300 mb-6 text-sm">
          Are you sure you want to delete this?
          <br />
          This action cannot be undone.
        </p>

        <div className="flex justify-between gap-4">
          {/* Cancel Button */}
          <button
            onClick={onCancel}
            className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold rounded-md
                       border border-gray-500 transition-all duration-200
                       shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          >
            Cancel
          </button>

          {/* Proceed Button */}
          <button
            onClick={onProceed}
            className="w-full py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-md
                       border border-red-400 transition-all duration-200
                       shadow-[0_0_15px_rgba(255,0,0,0.8)]"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDelete;
