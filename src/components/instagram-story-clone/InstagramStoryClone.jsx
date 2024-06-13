import { useState } from "react";
import Card from "./Card";
import Users from "./Users";
import { usersInfo, storyCards } from "./data";
export default function InstagramStoryClone() {
  const [activeImage, setActiveImage] = useState(0);
  // const [showCard, setShowCard] = useState(null);
  const handleNext = () => {
    if (activeImage >= 2) {
      return;
    }
    setActiveImage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (activeImage <= 0) {
      return;
    }
    setActiveImage((prev) => prev - 1);
  };

  // const handleShowCard = (index) => {
  //   setShowCard(index);
  // };

  return (
    <div>
      <h1 className="text-8xl font-bold mb-5">Instagram stroy clone</h1>
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
        {storyCards.map((item, index) => (
          <Card
            cardInfo={item}
            key={item.id}
            activeImage={activeImage}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        ))}
      </div>
    </div>
  );
}
