import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotdog,
  faBeer,
  faBacon,
  faCubes,
  faChair,
} from "@fortawesome/free-solid-svg-icons";

export default function FoodSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-6 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
        <FontAwesomeIcon icon={faHotdog} className="text-orange-600" />
        Inuman & Pulutan
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <FontAwesomeIcon icon={faBeer} className="text-amber-600 mr-2" />
          Beer sa bote
        </li>
        <li>
          <FontAwesomeIcon icon={faBacon} className="text-red-600 mr-2" />
          BBQ, liempo, isaw, pritong pusit
        </li>
        <li>
          <FontAwesomeIcon icon={faCubes} className="text-blue-500 mr-2" />
          Cooler na may yelo
        </li>
        <li>
          <FontAwesomeIcon icon={faChair} className="text-green-600 mr-2" />
          Folding chairs
        </li>
      </ul>
    </section>
  );
}
