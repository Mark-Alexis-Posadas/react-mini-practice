import { useState } from "react";

const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 24 },
  { id: 3, name: "Charlie", age: 28 },
];

const EditTwo = () => {
  const [person, setPerson] = useState(users);
  const [value, setValue] = useState("");
  const [currentValue, setCurrentValue] = useState({ index: null, name: "" });
  const [isEdit, setIsEdit] = useState(false);

  const handleClick = (idx) => {
    setValue(person[idx].name);
    setCurrentValue({ index: idx, name: person[idx].name });
    setIsEdit(true);
  };

  const handleSubmit = () => {
    setPerson((currentPerson) =>
      currentPerson.map((item, index) =>
        index === currentValue.index ? { ...item, name: value } : item
      )
    );
    setValue("");

    setCurrentValue((prev) => ({ ...prev, index: null }));
    setIsEdit(false);
  };

  return (
    <>
      <ul className="p-10">
        {person.map((item, index) => (
          <li
            onClick={() => handleClick(index)}
            key={item.id}
            className={`${
              currentValue.index === index && "bg-green-300 text-white"
            } my-2 rounded border border-green-400 p-2 text-green-500 cursor-pointer hover:bg-green-300  hover:text-white`}
          >
            <span className="font-bold text-black">{index}.</span> {item.name}
          </li>
        ))}

        {isEdit && (
          <>
            <label className="font-bold mt-5 block">Edit</label>
            <div className="flex items-center gap-3">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="update"
                className="rounded border border-green-400 p-2 text-green-500 w-full"
              />
              <button
                className="text-white bg-green-500 p-2 rounded"
                onClick={handleSubmit}
              >
                submit
              </button>
            </div>
          </>
        )}
      </ul>
    </>
  );
};

export default EditTwo;
