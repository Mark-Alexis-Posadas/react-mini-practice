import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faVolumeUp,
  faRecordVinyl,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";

export default function MusicSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-6 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-3">
        <FontAwesomeIcon icon={faMusic} className="text-red-500" /> Music Setup
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <FontAwesomeIcon icon={faVolumeUp} className="text-blue-600" />{" "}
          Bluetooth speaker with good bass
        </li>
        <li>
          <FontAwesomeIcon icon={faRecordVinyl} className="text-amber-700" />{" "}
          Classic Rock playlist / Buong album:
        </li>
        <ul className="list-disc pl-8">
          <li>Led Zeppelin</li>
          <li>Metallica</li>
          <li>Pink Floyd</li>
          <li>Lynyrd Skynyrd</li>
          <li>Janis Joplin</li>
        </ul>
        <li>
          <FontAwesomeIcon icon={faCompactDisc} className="text-purple-600" />{" "}
          Optional: mini turntable
        </li>
      </ul>
    </section>
  );
}
