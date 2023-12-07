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
      <div className="carousel-container">
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
