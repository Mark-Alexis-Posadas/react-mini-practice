import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrellaBeach, faBeer } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="text-center py-10">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 drop-shadow-lg">
        <FontAwesomeIcon icon={faUmbrellaBeach} className="text-teal-500" />{" "}
        Retro Rock Beach Vibes
        <FontAwesomeIcon icon={faBeer} className="text-amber-600 ml-2" />
      </h1>
      <p className="mt-4 text-lg italic text-gray-700">
        “Good friends, good music, good beer — timeless ‘yan, Gar.”
      </p>
    </header>
  );
}
