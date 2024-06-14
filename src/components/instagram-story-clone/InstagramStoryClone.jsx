import { useState } from "react";
import Card from "./Card";
import Users from "./Users";
import { usersInfo } from "./data";
export default function InstagramStoryClone() {
  const [activeImage, setActiveImage] = useState(0);
  const [showCard, setShowCard] = useState(null);

  const handlePrev = (idx) => {
    if (activeImage <= 0) {
      setShowCard((prev) => (prev === 0 ? usersInfo.length - 1 : prev - 1));
      setActiveImage(usersInfo[idx].images.length - 1);
    } else {
      setActiveImage((prev) => prev - 1);
    }
  };

  const handleNext = (idx) => {
    if (idx === usersInfo[idx].images.length - 1) {
      if (activeImage === 1) {
        setTimeout(() => {
          setShowCard(null);
          setActiveImage((prev) =>
            prev === usersInfo.length - 1 ? 0 : prev + 1
          );
        }, 2000);
      }
    }

    if (activeImage >= usersInfo[idx].images.length - 1) {
      setShowCard((prev) => (prev === usersInfo.length - 1 ? 0 : prev + 1));
      setActiveImage(0);
    } else {
      setActiveImage((prev) => prev + 1);
    }
  };

  const handleShowCard = (index) => {
    setShowCard(index);
  };

  return (
    <div className="p-20">
      <h1 className="text-8xl font-bold mb-5">Stories Clone</h1>
      <ul className="flex items-center gap-3">
        {usersInfo.map((item, index) => (
          <Users
            usersInfo={item}
            key={item.id}
            handleShowCard={() => handleShowCard(index)}
          />
        ))}
      </ul>

      <div className="flex items-center gap-3">
        {usersInfo.map((item, index) => (
          <Card
            cardInfo={item}
            key={item.id}
            showCard={showCard}
            activeImage={activeImage}
            idx={index}
            handlePrev={() => handlePrev(index)}
            handleNext={() => handleNext(index)}
          />
        ))}
      </div>
    </div>
  );
}
