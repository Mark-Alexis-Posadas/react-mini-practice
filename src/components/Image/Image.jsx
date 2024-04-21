import React, { useState } from "react";
import ImageItem from "./ImageItem";

const data = [
  "https://images.pexels.com/photos/20192549/pexels-photo-20192549/free-photo-of-blue-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/20138200/pexels-photo-20138200/free-photo-of-the-cover-of-the-album-with-a-woman-s-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/19736757/pexels-photo-19736757/free-photo-of-constellations-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/21319285/pexels-photo-21319285/free-photo-of-a-dirt-trail-runs-through-a-grassy-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function Image() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="grid grid-col-2">
      <div>
        <img src={data[currentImageIndex]} alt="image-lg" />
      </div>
      <div className="flex mt-5">
        {data.map((item, index) => (
          <ImageItem
            image={item}
            key={index}
            handleClick={handleClick}
            index={index}
            currentIndex={currentImageIndex}
          />
        ))}
      </div>
    </div>
  );
}
