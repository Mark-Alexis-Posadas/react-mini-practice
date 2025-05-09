import { useParams, Link } from "react-router-dom";
import { users } from "./data";
import {
  UserIcon,
  MapPinIcon,
  CalendarIcon,
  HeartIcon,
  ArrowLeftIcon,
} from "lucide-react";

export default function Details() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user)
    return (
      <div className="text-center text-red-500 text-lg mt-10">
        User not found.
      </div>
    );

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10 border border-gray-100">
      <div className="flex items-center mb-6">
        <UserIcon className="w-6 h-6 text-blue-500 mr-2" />
        <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
      </div>
      <div className="text-gray-700 space-y-3 text-base">
        <div className="flex items-center">
          <CalendarIcon className="w-5 h-5 text-gray-400 mr-2" />
          Age: {user.age}
        </div>
        <div className="flex items-center">
          <UserIcon className="w-5 h-5 text-gray-400 mr-2" />
          Gender: {user.gender}
        </div>
        <div className="flex items-center">
          <MapPinIcon className="w-5 h-5 text-gray-400 mr-2" />
          Address: {user.address}
        </div>
        <div>
          <div className="flex items-center mb-1">
            <HeartIcon className="w-5 h-5 text-gray-400 mr-2" />
            Hobbies:
          </div>
          <ul className="list-disc list-inside ml-7 text-sm text-gray-600">
            {user.hobbies.map((hobby, idx) => (
              <li key={idx}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        to="/"
        className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition text-sm font-medium"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-1" />
        Back to Home
      </Link>
    </div>
  );
}
