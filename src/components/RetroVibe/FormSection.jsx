import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function FormSection({ attendees, setAttendees }) {
  const [name, setName] = useState("");
  const [vibe, setVibe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !vibe) return;
    const newAttendee = { id: Date.now(), name, vibe };
    setAttendees([...attendees, newAttendee]);
    setName("");
    setVibe("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faUserPlus} className="text-blue-600" />
        Sumama sa Vibes
      </h2>
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Pangalan:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-amber-500"
          placeholder="Ilagay ang pangalan mo"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Vibe mo ngayon:</label>
        <select
          value={vibe}
          onChange={(e) => setVibe(e.target.value)}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-amber-500"
        >
          <option value="">Pumili ng vibe...</option>
          <option value="Single">🧍 Single</option>
          <option value="May Jowa">💘 May Jowa</option>
          <option value="Broken">💔 Broken</option>
          <option value="Reset">🔄 Reset Mode</option>
          <option value="Pagod sa Work">💼 Pagod sa Work</option>
          <option value="Tambay">🍻 Tambay</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
