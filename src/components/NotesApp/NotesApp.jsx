import { useState } from "react";
import { NoteItem } from "./NoteItem";
import ConfiramationDelete from "./ConfiramationDelete";

const backgroundColorData = [
  { id: 1, color: "bg-red-500" },
  { id: 2, color: "bg-blue-500" },
  { id: 3, color: "bg-green-500" },
  { id: 4, color: "bg-orange-500" },
];

const NotesApp = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [activeBgColor, setActiveBgColor] = useState(null);
  const [submittedNotes, setSubmittedNotes] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  const handleSetBgColor = (index) => {
    setActiveBgColor(index);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setIsDelete(false);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    setIsDelete(false);
  };

  const handleToggleDelete = () => {
    setIsDelete(true);
  };

  const handleProceedDelete = () => {
    setSubmittedNotes([]);
    setIsDelete(false);
  };

  const handleEdit = (idx) => {
    setEditIndex(idx);
    console.log(editIndex, idx);
    const inputEditVal = submittedNotes[idx];
    setTitle(inputEditVal.title);
    setText(inputEditVal.text);
    setIsEditing(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!title || !text || activeBgColor === null) {
      alert("Please add note and select a background color");
      return;
    }

    if (isEditing) {
      const editVal = submittedNotes.map((item, index) =>
        index === editIndex
          ? { title, text, bgColor: backgroundColorData[activeBgColor].color }
          : item
      );
      setSubmittedNotes(editVal);
      setIsEditing(false);
    } else {
      const notes = {
        title: title,
        text: text,
        bgColor: backgroundColorData[activeBgColor].color,
      };

      setSubmittedNotes((prev) => [...prev, notes]);
    }

    setTitle("");
    setText("");
    setActiveBgColor(null);
  };

  return (
    <div className="p-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-5">Notes App</h1>
      <form
        className="bg-slate-50 shadow-md p-5 w-[500px] flex flex-col"
        onSubmit={handleFormSubmit}
      >
        <input
          onChange={handleTitleChange}
          value={title}
          type="text"
          className={`${
            isEditing ? "border-green-500" : "border-slate-300"
          } border-b mb-3 p-4`}
          placeholder="Enter your title"
        />
        <textarea
          onChange={handleTextChange}
          value={text}
          className={`${
            isEditing ? "border-green-500" : "border-slate-300"
          } border-b mb-3 p-4`}
          placeholder="Enter your note text."
        ></textarea>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {backgroundColorData.map((color, index) => (
              <button
                onClick={() => handleSetBgColor(index, index)}
                key={index}
                type="button"
                className={`${
                  activeBgColor === index ? "border-sky-500" : ""
                } border w-[30px] h-[30px] rounded-full ${color.color}`}
              ></button>
            ))}
          </div>
          <button type="submit" className="text-white p-2 rounded bg-blue-600">
            {isEditing ? "Update note" : "Add note"}
          </button>
        </div>
      </form>

      {submittedNotes.length === 0 ? null : (
        <button
          className="text-white bg-red-600 rounded p-2 mt-10"
          onClick={handleToggleDelete}
        >
          {submittedNotes.length <= 1 ? "Delete note" : "Delete all notes"}
        </button>
      )}

      <div className="flex items-center gap-3 mt-5">
        {submittedNotes.map((note, index) => (
          <NoteItem
            idx={index}
            key={index}
            note={note}
            noteBgColor={note.bgColor}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      {isDelete && (
        <ConfiramationDelete
          handleProceedDelete={handleProceedDelete}
          submittedNotes={submittedNotes}
          setIsDelete={setIsDelete}
        />
      )}
    </div>
  );
};

export default NotesApp;
