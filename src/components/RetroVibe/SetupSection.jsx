import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCampground,
  faRug,
  // faCooler,
  faLightbulb,
  faFire,
  faCamera,
  faCookie,
} from "@fortawesome/free-solid-svg-icons";

export default function SetupSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-6 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-3">
        <FontAwesomeIcon icon={faCampground} className="text-green-600" /> Setup
        sa Beach
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <FontAwesomeIcon icon={faRug} className="text-amber-600" /> Banig or
          picnic blanket
        </li>
        <li>
          <FontAwesomeIcon icon={faCookie} className="text-blue-600" /> Coleman
          cooler
        </li>
        <li>
          <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500" />{" "}
          Fairy lights / lanterns
        </li>
        <li>
          <FontAwesomeIcon icon={faFire} className="text-red-500" /> Bonfire
        </li>
        <li>
          <FontAwesomeIcon icon={faCamera} className="text-gray-600" /> Polaroid
          or warm-filter photos
        </li>
      </ul>
    </section>
  );
}
