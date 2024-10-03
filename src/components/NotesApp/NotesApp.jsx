import { useState } from "react";
import { NoteItem } from "./NoteItem";

const NotesApp = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [submittedNotes, setSubmittedNotes] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title || !text) {
      alert("please add note");
      return;
    }
    const notes = {
      title: title,
      text: text,
    };
    setSubmittedNotes((prev) => [...prev, notes]);
    setTitle("");
    setText("");
  };

  return (
    <div className="p-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-5">Notes App</h1>
      <form
        className="bg-slate-50 shadow-md p-5 w-[500px] flex flex-col"
        onSubmit={handleFormSubmit}
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="border-b border-slate-300 mb-3 p-4"
          placeholder="Enter your title"
        />
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className="border-b border-slate-300 mb-3 p-4"
          placeholder="Enter your note text."
        ></textarea>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-[30px] h-[30px] rounded-full ${
                    index === 0
                      ? "bg-red-500"
                      : index === 1
                      ? "bg-blue-500"
                      : index === 2
                      ? "bg-green-500"
                      : "bg-orange-500"
                  }`}
                ></button>
              ))}
          </div>
          <button type="submit" className="text-white p-2 rounded bg-blue-600">
            Add
          </button>
        </div>
      </form>
      {submittedNotes.length === 0 ? (
        ""
      ) : (
        <button
          className="text-white bg-red-600 rounded p-2 mt-10"
          onClick={() => setSubmittedNotes([])}
        >
          {submittedNotes.length <= 1 ? "delete note" : "delete all notes"}
        </button>
      )}

      <div className="flex items-center gap-3">
        {submittedNotes.map((note, index) => (
          <NoteItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesApp;
