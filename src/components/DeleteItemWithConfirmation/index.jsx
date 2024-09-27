import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "A high-performance laptop for work and gaming.",
    category: "Electronics",
    available: true,
  },
  {
    id: 2,
    name: "Headphones",
    price: 149,
    description: "Wireless headphones with noise-cancellation feature.",
    category: "Electronics",
    available: false,
  },
];

const Confirmation = () => {
  const [data, setData] = useState(products);
  const [id, setId] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [modalName, setIsModalName] = useState("");

  const handleDelete = (id, name) => {
    setId(id);
    setIsShow(true);
    setIsModalName(name);
  };

  const handleYes = () => {
    if (id && isShow) {
      const deleteItems = data.filter((item) => item.id !== id);
      setData(deleteItems);
      setId(null);
      setIsShow(false);
    }
  };

  return (
    <>
      <ul>
        {data.map((item, index) => (
          <li
            key={item.id}
            className="cursor-pointer"
            onClick={() => handleDelete(item.id, item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {isShow && (
        <div className="bg-black text-white w-[300px] p-10 flex items-center flex-col">
          <p className="text-white text-md">
            Are you sure you want to delete
            <span className="ml-3 font-bold text-white">{modalName}</span>?
          </p>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsShow(false)}>cancel</button>
            <button onClick={handleYes}>yes</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Confirmation;
