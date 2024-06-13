import { useState } from "react";
import Card from "./Card";
import Users from "./Users";
import { usersInfo, storyCards } from "./data";
export default function InstagramStoryClone() {
  const [showCard, setShowCard] = useState(null);
  const [active, setActive] = useState(0);

  const handleShowCard = (index) => {
    setShowCard(index);
  };

  const handlePrev = () => {
    if (active <= 0) {
      setActive((p) => p - 1);
    }
  };

  const handleNext = () => {
    if (active >= 0) {
      setActive((n) => n + 1);
    }
  };

  return (
    <div className="mt-10 ml-10">
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
            showCard={showCard}
            idx={index}
            handleNext={handleNext}
            handlePrev={handlePrev}
            cardInfo={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
