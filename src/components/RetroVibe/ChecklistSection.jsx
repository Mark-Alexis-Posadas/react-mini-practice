import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faGlasses,
  faVolumeUp,
  faBeer,
  faRug,
  faFire,
  faTshirt,
  faLightbulb,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const ChecklistSection = () => {
  const checklist = [
    { label: "Wayfarer sunglasses", icon: faGlasses, color: "text-gray-600" },
    { label: "Speaker + playlist", icon: faVolumeUp, color: "text-blue-600" },
    { label: "Pulutan & beer", icon: faBeer, color: "text-amber-600" },
    { label: "Banig / upuan", icon: faRug, color: "text-amber-600" },
    { label: "Bonfire", icon: faFire, color: "text-red-500" },
    { label: "Retro outfit", icon: faTshirt, color: "text-blue-500" },
    { label: "Fairy lights", icon: faLightbulb, color: "text-yellow-500" },
    { label: "Camera / Polaroid", icon: faCamera, color: "text-gray-600" },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-6 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
        <FontAwesomeIcon icon={faListCheck} className="text-amber-700" />
        Checklist
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {checklist.map((item, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input type="checkbox" className="w-5 h-5 accent-yellow-500" />
            <span className="flex items-center gap-2">
              {item.label}
              <FontAwesomeIcon icon={item.icon} className={item.color} />
            </span>
          </label>
        ))}
      </div>
    </section>
  );
};

export default ChecklistSection;
