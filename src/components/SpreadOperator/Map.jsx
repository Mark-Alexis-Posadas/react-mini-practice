import React from "react";
import Item from "./Item";

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const Map = () => {
  return (
    <div>
      {items.map((item) => {
        return <Item key={item.id} {...item}></Item>;
      })}
    </div>
  );
};

export default Map;
