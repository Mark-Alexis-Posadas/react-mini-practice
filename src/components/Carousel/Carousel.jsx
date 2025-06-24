import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Carousel({ images }) {
  const itemsToDisplay = 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + itemsToDisplay) % images.length);
  };
  const goToPrevSlide = () => {
    setCurrentIndex(
      (currentIndex - itemsToDisplay + images.length) % images.length
    );
  };
  const getSlidesToShow = () => {
    const slides = [];
    for (let i = 0; i < itemsToDisplay; i++) {
      const index = (currentIndex + i) % images.length;
      slides.push(images[index]);
    }
    return slides;
    console.log(slides);
  };
  return (
    <div className="carousel">
      <div className="relative flex justify-between items-center">
        <button
          className="rounded-full w-8 h-8 flex items-center justify-center bg-white p-2 text-gray-500"
          onClick={goToPrevSlide}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div className="flex space-x-4">
          {getSlidesToShow().map((image, index) => (
            <div key={index}>
              <h1>{(currentIndex + index) % images.length}</h1>
              <img
                src={image}
                alt={`Slide ${((currentIndex + index) % images.length) + 1}`}
                className="rounded-xl object-cover w-[200px] h-[200px]"
              />
            </div>
          ))}
        </div>
        <button
          className="rounded-full w-8 h-8 flex items-center justify-center bg-white p-2 text-gray-500"
          onClick={goToNextSlide}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}
