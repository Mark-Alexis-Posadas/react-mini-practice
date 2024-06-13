import { useState } from "react";
import Card from "./Card";
import Users from "./Users";
import { usersInfo, storyCards } from "./data";
export default function InstagramStoryClone() {
  // const [showCard, setShowCard] = useState(null);

  // const handleShowCard = (index) => {
  //   setShowCard(index);
  // };

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
        {storyCards.map((item) => (
          <Card cardInfo={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
