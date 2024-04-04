import { useState } from "react";

const Tab = () => {
  const tabText = ["home", "contact", "blog"];
  const tabContent = [
    {
      id: 1,
      description: "home",
    },
    {
      id: 2,
      description: "content",
    },
    {
      id: 3,
      description: "blog",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <ul className="grid grid-cols-3">
        {tabText.map((tab, idx) => (
          <li
            onClick={() => changeTab(idx)}
            className={`${
              activeTab === idx ? "bg-purple-400" : "bg-green-400"
            } text-white w-30 p-3 uppercase cursor-pointer text-center`}
            key={idx}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div>
        {tabContent.map((content, index) => (
          <div
            key={content.id}
            className={`${
              activeTab === index ? "block bg-purple-400" : "hidden"
            } p-3`}
          >
            {content.description}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tab;
