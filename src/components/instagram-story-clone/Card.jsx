import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({
  cardInfo,
  activeImage,
  handleNext,
  handlePrev,
}) {
  return (
    <div className="fixed left-0 bottom-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="bg-slate-200 shadow-md p-2 rounded w-[600px] h-[600px] relative">
        {cardInfo.images.map(
          (data, index) =>
            index === activeImage && (
              <img
                key={index}
                src={data}
                alt={data.images}
                className="w-full h-full object-cover"
              />
            )
        )}

        <div className="flex items-center justify-between absolute top-[250px] w-full left-0">
          <button
            className={`${
              activeImage === 0 ? "hidden" : "block"
            } w-8 h-8 rounded-full p-2 flex items-center justify-center bg-slate-100 text-gray-500`}
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faLessThan} />
          </button>
          <button
            className={`${
              activeImage === 0 ? "ml-auto" : "ml-0"
            } w-8 h-8 rounded-full p-2 flex items-center justify-center bg-slate-100 text-gray-500`}
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faGreaterThan} />
          </button>
        </div>
      </div>
    </div>
  );
}
