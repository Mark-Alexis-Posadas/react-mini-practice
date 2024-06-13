import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({
  cardInfo,
  activeImage,
  idx,
  handleNext,
  handlePrev,
  showCard,
}) {
  console.log(idx);
  return (
    <div
      className={`${
        showCard === idx ? "flex" : "hidden"
      } fixed left-0 bottom-0 w-full h-full items-center justify-center bg-[rgba(0,0,0,0.4)]`}
    >
      <div>
        <div className="flex items-center gap-3">
          {cardInfo.images.map((_, index) => (
            <div
              key={index}
              className={`${
                index === activeImage ? "bg-white" : "bg-gray-400 "
              } w-[50px] h-1`}
            ></div>
          ))}
        </div>
        <h2 className="self-start text-white my-3">{cardInfo.name}</h2>
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
                activeImage === 0 && idx === 0 ? "hidden" : "ml-0"
              } w-8 h-8 rounded-full p-2 flex items-center justify-center bg-slate-100 text-gray-500`}
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faGreaterThan} />
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
    </div>
  );
}
