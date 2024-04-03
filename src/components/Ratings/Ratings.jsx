import React, { useEffect, useState } from "react";

const Ratings = () => {
  const [rating, setRating] = useState(
    () => localStorage.getItem("rating") || 0
  );
  const [hover, setHover] = useState(0);

  useEffect(() => {
    localStorage.setItem("rating", rating);
  }, [rating]);
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Ratings;
