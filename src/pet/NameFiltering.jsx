import { useState } from "react";

const persons = [
  { id: 1, name: "Mark Alexis Posadas" },
  { id: 2, name: "Emman Yeser Benavidez " },
  { id: 3, name: "Care Bryan Taguar" },
  { id: 4, name: "Argie Mapala" },
  { id: 5, name: "Aries Campit" },
  { id: 6, name: "Ian Awitan" },
  { id: 7, name: "Aldrin Dela Cruz" },
  { id: 8, name: "Renan Macaranas" },
  { id: 9, name: "John Carlo Sabado" },
  { id: 10, name: "Sheen Rosario" },
];

export const NameFiltering = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredPerson, setFilteredPerson] = useState(persons);
  const [addValue, setAddValue] = useState("");
  const [isExist, setIsExist] = useState(false);
  const [isVisibleItem, setIsVisibleItem] = useState(true);

  const handleAddChange = (e) => {
    const value = e.target.value;
    setAddValue(value);

    // Check if the name exists
    const exists = persons.some(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );
    setIsExist(exists);
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setInputValue(searchTerm);
    setIsVisibleItem(true);

    const filteredItem = persons.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPerson(filteredItem);
  };

  const handleAddClick = (name) => {
    setInputValue(name);
    setIsVisibleItem(false);
  };
  return (
    <div className="p-10 flex flex-col">
      {isExist && (
        <span className="text-red-400">{`${addValue} already exists`}</span>
      )}
      <input
        type="text"
        placeholder="add"
        value={addValue}
        onChange={handleAddChange}
      />
      <input
        type="text"
        placeholder="search"
        value={inputValue}
        onChange={handleChange}
      />
      {filteredPerson.length === 0 ? (
        <p>No item found</p>
      ) : (
        isVisibleItem && (
          <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {filteredPerson.map((person, index) => (
              <li
                key={person.id}
                className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                onClick={() => handleAddClick(person.name)}
              >
                <span>{index + 1}.</span>
                {person.name}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};
