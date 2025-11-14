import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUser,
  faHeart,
  faHeartBroken,
  faRetweet,
  faBriefcase,
  faBeer,
} from "@fortawesome/free-solid-svg-icons";

export default function VibesSection() {
  const vibes = [
    {
      icon: faUser,
      color: "text-orange-500",
      title: "Single",
      desc: "Malaya, walang iniintindi, tugtugan at dagat lang. 🌊",
    },
    {
      icon: faHeart,
      color: "text-pink-500",
      title: "May Jowa",
      desc: "Kilig sa ilalim ng bituin, may classic rock pa. 💘",
    },
    {
      icon: faHeartBroken,
      color: "text-red-500",
      title: "Broken",
      desc: "Hayaan mong ang alon ang maglabas ng bigat. 💔",
    },
    {
      icon: faRetweet,
      color: "text-blue-500",
      title: "Reset",
      desc: "Disconnect muna sa gulo ng mundo. 🕊️",
    },
    {
      icon: faBriefcase,
      color: "text-green-600",
      title: "Pagod sa Work",
      desc: "Walang email, walang boss, chill ka muna. 🏖️",
    },
    {
      icon: faBeer,
      color: "text-amber-600",
      title: "Tambay",
      desc: "Walang plano pero laging may tawanan. 🤘",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4">
        <FontAwesomeIcon icon={faUsers} className="text-blue-600" /> Para sa
        Lahat
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vibes.map((v, i) => (
          <div
            key={i}
            className="p-4 bg-orange-50 rounded-lg border flex flex-col gap-1"
          >
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <FontAwesomeIcon icon={v.icon} className={v.color} />
              {v.title}
            </h3>
            <p className="text-gray-700 text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
