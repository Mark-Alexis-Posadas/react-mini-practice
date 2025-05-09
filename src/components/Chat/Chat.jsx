import {
  faEllipsisV,
  faReply,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export const Chat = () => {
  const [messageValue, setMessageValue] = useState("");
  const [message, setMessage] = useState([]);
  const [isMessage, setIsMessage] = useState(false);

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    setMessageValue("");
    setMessage((prev) => [...prev, messageValue]);
    setIsMessage(true);
  };

  return (
    <div className="p-10 bg-slate-50 shadow-md m-10">
      <div className="border p-5 border-slate-100 bg-white min-h-[300px] mb-5 rounded flex items-end justify-end">
        {isMessage && (
          <div className="relative group flex">
            <div className="flex flex-col">
              {message.map((m) => (
                <div className="flex">
                  <div className="items-center gap-3 hidden group-hover:flex  p-2 rounded-lg">
                    <button>
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faReply} />
                    </button>
                    <button>
                      <FontAwesomeIcon icon={faSmile} />
                    </button>
                  </div>

                  <p
                    key={m.length}
                    className="text-white p-2 rounded-full bg-blue-600 group-hover:bg-blue-700 transition duration-300"
                  >
                    {m}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <form
        className="flex items-center gap-4 justify-between"
        onSubmit={handleMessageSubmit}
      >
        <input
          onChange={(e) => setMessageValue(e.target.value)}
          value={messageValue}
          type="text"
          placeholder="enter a message..."
          className="bg-white p-2 flex-1 outline-none"
        />
        <button type="submit" className="text-white rounded p-2 bg-blue-600">
          send
        </button>
      </form>
    </div>
  );
};
