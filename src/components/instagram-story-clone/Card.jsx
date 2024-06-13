import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ cardInfo }) {
  return (
    <div className="fixed left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="bg-slate-200 shadow-md p-2 rounded w-[600px] h-[600px] relative">
        {cardInfo.images.map(
          (data, index) =>
            index === 1 && (
              <img
                key={index}
                src={data}
                alt={data.images}
                className="w-full h-full object-cover"
              />
            )
        )}

        <div className="flex items-center justify-between absolute top-[250px] w-full left-0">
          <button className="w-8 h-8 rounded-full p-2 flex items-center justify-center bg-slate-100 text-gray-500">
            <FontAwesomeIcon icon={faLessThan} />
          </button>
          <button className="w-8 h-8 rounded-full p-2 flex items-center justify-center bg-slate-100 text-gray-500">
            <FontAwesomeIcon icon={faGreaterThan} />
          </button>
        </div>
      </div>
    </div>
  );
}
