import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NoteItem = ({ note, noteBgColor }) => {
  return (
    <div className={`${noteBgColor} p-2 rounded w-[250px]`}>
      <h1 className="font-bold mb-2">{note.title}</h1>
      <p className="text-sm text-gray-200">{note.text}</p>
      <button className="w-[30px] h-[30px] ml-auto rounded-full bg-white flex items-center justify-center">
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
    </div>
  );
};
