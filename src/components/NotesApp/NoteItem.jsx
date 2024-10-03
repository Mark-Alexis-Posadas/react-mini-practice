import React from "react";

export const NoteItem = ({ note }) => {
  return (
    <div className="p-2 rounded">
      <h1 className="font-bold mb-5">{note.title}</h1>
      <p className="text-sm text-gray-200">{note.text}</p>
      <button>edit</button>
    </div>
  );
};
