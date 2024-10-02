import React from "react";

const NotesApp = () => {
  return (
    <div className="p-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-5">Notes App</h1>
      <form
        action=""
        className="bg-slate-50 shadow-md p-5 w-[500px] flex flex-col"
      >
        <input
          type="text"
          className="border-b border-slate-300 mb-3 p-4"
          placeholder="Enter your title"
        />
        <input
          type="text"
          className="border-b border-slate-300 mb-3 p-4"
          placeholder="Enter your note text."
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-[50px] h-[50px] rounded-full bg-red-500"
            ></button>
            <button
              type="button"
              className="w-[50px] h-[50px] rounded-full bg-orange-500"
            ></button>
            <button
              type="button"
              className="w-[50px] h-[50px] rounded-full bg-green-500"
            ></button>
            <button
              type="button"
              className="w-[50px] h-[50px] rounded-full bg-purple-500"
            ></button>
          </div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default NotesApp;
