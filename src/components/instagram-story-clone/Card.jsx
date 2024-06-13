import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Card({
  cardInfo,
  showCard,
  idx,
  active,
  handleNext,
  handlePrev,
}) {
  return (
    <div
      className={`${
        showCard === idx ? "block" : "hidden"
      } bg-slate-200 shadow-md p-2 rounded w-[200px] h-[200px] relative`}
    >
      {cardInfo.images.map(
        (data, index) =>
          index === active && (
            <img
              key={index}
              src={data}
              alt={data.images}
              className={`${
                active === index ? "block" : "hidden"
              } w-full h-full object-cover`}
            />
          )
      )}

      <div className="flex items-center justify-between absolute top-20 w-full left-0">
        <button
          className={`${
            idx <= 0 ? "hidden" : "block"
          } w-8 h-8 rounded-full p-2 flex items-center justify-center bg-slate-100 text-gray-500`}
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faLessThan} />
        </button>
        <button
          className={`${
            idx <= 0 ? "ml-auto" : "m-0"
          } w-8 h-8 rounded-full p-2 flex items-center justify-center bg-slate-100 text-gray-500`}
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      </div>
    </div>
  );
}
