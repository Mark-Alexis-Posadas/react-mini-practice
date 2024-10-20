import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-container relative flex flex-col">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-xl h-full object-cover"
            />
          </div>
        ))}
        <div className="flex items-center justify-center w-full gap-3 absolute bottom-4">
          {images.map((_, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full cursor-pointer transition-transform duration-300 ${
                currentIndex === index
                  ? "bg-green-400 w-3 h-3 scale-125"
                  : "bg-gray-400 w-2 h-2"
              }`}
              key={index}
            ></div>
          ))}
        </div>
        <div className="flex items-center justify-between absolute w-full bottom-40 px-5">
          <button
            className="rounded-full w-8 h-8 flex items-center justify-center bg-white p-2 text-gray-500"
            onClick={goToPrevSlide}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className="rounded-full w-8 h-8 flex items-center justify-center bg-white p-2 text-gray-500"
            onClick={goToNextSlide}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
