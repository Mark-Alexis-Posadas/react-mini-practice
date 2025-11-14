import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import FormSection from "./FormSection";
import AttendeeList from "./AttendeeList";
import VibesSection from "./VibesSection";
import OutfitSection from "./OutfitSection";
import SetupSection from "./SetupSection";
import FoodSection from "./FoodSection";
import ChecklistSection from "./ChecklistSection";
import Footer from "./Footer";
import MusicSection from "./MusicSection";

const RetroVibe = () => {
  const [attendees, setAttendees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("attendees")) || [];
    setAttendees(saved);

    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode !== null) setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("attendees", JSON.stringify(attendees));
  }, [attendees]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans text-gray-800 bg-gradient-to-b ${
        darkMode
          ? "from-gray-900 to-gray-700 text-gray-200"
          : "from-orange-100 to-yellow-200 text-gray-800"
      }`}
    >
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-6 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
        >
          {showForm ? "Hide Form & List" : "Add Yourself to the Vibes"}
        </button>

        {/* Dark mode toggle button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition flex items-center space-x-2"
        >
          {darkMode ? (
            <>
              <FontAwesomeIcon icon={faSun} className="ml-1 text-gray-400" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faMoon} className="ml-1 text-gray-400" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>

      {showForm && (
        <>
          <FormSection attendees={attendees} setAttendees={setAttendees} />
          <AttendeeList attendees={attendees} setAttendees={setAttendees} />
        </>
      )}

      <VibesSection />
      <OutfitSection />
      <MusicSection />
      <SetupSection />
      <FoodSection />
      <ChecklistSection />
      <Footer />
    </div>
  );
};

export default RetroVibe;
