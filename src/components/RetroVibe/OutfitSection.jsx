import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHatCowboy,
  faGlasses,
  faTshirt,
  faShoePrints,
  faHatCowboySide,
} from "@fortawesome/free-solid-svg-icons";

export default function OutfitSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-6 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
        <FontAwesomeIcon icon={faHatCowboy} className="text-amber-700" />
        Outfit & Retro Touch
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <FontAwesomeIcon icon={faGlasses} className="text-gray-600 mr-2" />
          Wayfarer sunglasses
        </li>
        <li>
          <FontAwesomeIcon icon={faTshirt} className="text-blue-500 mr-2" />
          Band shirts
        </li>
        <li>
          <FontAwesomeIcon
            icon={faShoePrints}
            className="text-stone-700 mr-2"
          />
          Faded shorts / jeans
        </li>
        <li>
          <FontAwesomeIcon
            icon={faHatCowboySide}
            className="text-amber-700 mr-2"
          />
          Bucket hat or bandana
        </li>
        <li>
          <FontAwesomeIcon
            icon={faShoePrints}
            className="text-stone-700 mr-2"
          />
          Sandals or slippers
        </li>
      </ul>
    </section>
  );
}
