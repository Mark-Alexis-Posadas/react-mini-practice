import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AttendeeList({ attendees, setAttendees }) {
  const handleDelete = (id) => {
    const updated = attendees.filter((a) => a.id !== id);
    setAttendees(updated);
  };

  return (
    <section className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faUsers} className="text-green-600" />
        Sumama na sa atin:
      </h2>
      {attendees.length === 0 ? (
        <p className="text-gray-600 italic">
          Wala pang sumasama... ikaw na mauna 😎
        </p>
      ) : (
        <ul className="space-y-3">
          {attendees.map((person) => (
            <li
              key={person.id}
              className="flex justify-between items-center bg-amber-50 border border-amber-200 p-3 rounded"
            >
              <div>
                <span className="font-semibold">{person.name}</span>{" "}
                <span className="text-gray-600 text-sm">({person.vibe})</span>
              </div>
              <button
                onClick={() => handleDelete(person.id)}
                className="text-red-500 hover:text-red-700 transition"
                aria-label={`Remove ${person.name}`}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
