import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faEdit,
  faTrash,
  faTimes,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

const buttons = [
  {
    label: "Save",
    type: "button",
    className:
      "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
    icon: faSave,
  },
  {
    label: "Edit",
    type: "button",
    className:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    icon: faEdit,
  },
  {
    label: "Delete",
    type: "button",
    className:
      "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    icon: faTrash,
  },
  {
    label: "Cancel",
    type: "button",
    className:
      "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
    icon: faTimes,
  },
  {
    label: "Submit",
    type: "submit",
    className:
      "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded",
    icon: faPaperPlane,
  },
];

export const Root = () => {
  return (
    <div className="p-4 flex items-center gap-3">
      {buttons.map((button, index) => (
        <Button
          key={index}
          className={button.className}
          type={button.type}
          disabled={false}
        >
          <FontAwesomeIcon icon={button.icon} className="mr-2" />
          {button.label}
        </Button>
      ))}
    </div>
  );
};
