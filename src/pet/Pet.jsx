import { useState } from "react";
import { products } from "../exercises/data";
export const App = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <ul className="p-20 bg-slate-100">
      {products.map((item, index) => (
        <li
          key={index}
          className={`${
            index === active && "bg-white text-purple-600 shadow-md"
          } text-md my-3 border border-slate-300 p-3 cursor-pointer`}
          onClick={() => handleClick(index)}
        >
          {index === 1 && active === 1 ? "fucker" : item.name}
        </li>
      ))}
    </ul>
  );
};

const data = ["eat", "my", "ass"];
export const AppTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = () => {
    setCurrentIndex((p) => (p + 1) % data.length);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      {data.map((item, index) => (
        <h1
          className={`${
            index === 0
              ? "text-purple-500"
              : index === 1
              ? "text-green-500"
              : "text-red-500"
          } text-[400px] uppercase cursor-pointer`}
          key={index}
          onClick={handleClick}
        >
          {index === currentIndex && item}
        </h1>
      ))}
    </div>
  );
};

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <>
        <p>loading...</p>
        <button
          onClick={() =>
            setTimeout(() => {
              setIsLoading(false);
              console.log(isLoading);
            }, 3000)
          }
        >
          click me
        </button>
      </>
    );
  }
  return <div>App</div>;
};

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [submittedValues, setSubmittedValues] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedValues([
      ...submittedValues,
      firstName,
      lastName,
      middleName,
      userName,
      password,
      confirmPassword,
    ]);
    setFirstName("");
    setLastName("");
    setMiddleName("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="p-20">
      {submittedValues.length === 0 ? null : (
        <ul>
          {sumittedValues.map((item, index) => (
            <li
              className="border border-b-0 last:border border-slate-500 p-2"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          className="border border-black p-2 rounded my-2"
          placeholder="first name"
        />
        <input
          onChange={(e) => setMiddleName(e.target.value)}
          value={middleName}
          type="text"
          className="border border-black p-2 rounded my-2"
          placeholder="middle name"
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          className="border border-black p-2 rounded my-2"
          placeholder="last name"
        />
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          className="border border-black p-2 rounded my-2"
          placeholder="user name"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="border border-black p-2 rounded my-2"
          placeholder="password"
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          className="border border-black p-2 rounded my-2"
          placeholder="confirm password"
        />
        <button type="submit" className="text-white bg-black p-2 rounded mt-2">
          submit
        </button>
      </form>
    </div>
  );
}

import { useEffect } from "react";
import { useState } from "react";
import { PostRequest } from "./components/Api/PostRequest";

export const PostMethod = () => {
  const [data, setData] = useState([]);
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submittedData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, [submittedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...submittedData, inputFields });
  };

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-20">
      {data.map((item) => (
        <li key={item.id} className="flex items-center gap-4">
          {item.firstName} - {item.lastName} - {item.email}
        </li>
      ))}

      {submittedData.map((item) => (
        <li key={item.id} className="flex items-center gap-4">
          {item.firstName} - {item.lastName} - {item.email}
        </li>
      ))}

      <PostRequest
        inputFields={inputFields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

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
