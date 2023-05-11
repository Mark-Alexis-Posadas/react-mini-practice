import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <button className="prev btn btn-primary" onClick={goToPrevSlide}>
        Prev
      </button>
      <button className="next btn btn-primary" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
