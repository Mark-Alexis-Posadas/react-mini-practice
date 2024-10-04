import React from "react";

const ConfiramationDelete = ({
  submittedNotes,
  handleProceedDelete,
  setIsDelete,
}) => {
  return (
    <div>
      {`are you sure to delete ${
        submittedNotes.length > 1 ? "all these notes?" : "this note?"
      }`}
      <div className="flex items-center gap-3">
        <button
          className="text-white rounded p-2 bg-red-600"
          onClick={() => setIsDelete(false)}
        >
          cancel
        </button>
        <button
          className="text-white rounded p-2 bg-blue-600"
          onClick={handleProceedDelete}
        >
          proceed
        </button>
      </div>
    </div>
  );
};

export default ConfiramationDelete;
