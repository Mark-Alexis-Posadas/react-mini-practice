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
      <div className="carousel-container flex flex-col">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="flex items-center gap-3">
          {images.map((_, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              className={`w-5 h-5 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-green-400" : "bg-gray-400"
              }`}
              key={index}
            ></div>
          ))}
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between w-100">
        <button className="prev-button" onClick={goToPrevSlide}>
          Previous
        </button>
        <button className="next-button" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
}
