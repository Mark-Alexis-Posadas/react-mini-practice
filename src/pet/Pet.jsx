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

const images = [
  "https://64.media.tumblr.com/e03f1411edfd276553c14f1fea127d07/tumblr_pkozjmikSj1w6wy64_640.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f3c06b9-d9cc-477c-8a58-699b9bc07e57/d5dkbaf-72d85ef9-1af4-48d7-a1f3-db18569f5f3e.jpg/v1/fit/w_469,h_679,q_70,strp/gerard_way__editted_version__by_barbaraway_d5dkbaf-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njc5IiwicGF0aCI6IlwvZlwvNGYzYzA2YjktZDljYy00NzdjLThhNTgtNjk5YjliYzA3ZTU3XC9kNWRrYmFmLTcyZDg1ZWY5LTFhZjQtNDhkNy1hMWYzLWRiMTg1NjlmNWYzZS5qcGciLCJ3aWR0aCI6Ijw9NDY5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qzsNs8Vc3AneUySSVJXSlSETfm7CDCd1QZBbp1C5HSE",
  "https://64.media.tumblr.com/f3ea975839fe431c5cd973a05706aa35/576337e07a60aec8-2e/s1280x1920/07b3a506f93035a51aa1ce3a72fac1b20b394fd4.jpg",
];
export const Carousel = () => {
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    if (active === 0) return;
    setActive((prev) => prev - 1);
  };

  const handleNext = () => {
    if (active === 2) return;

    setActive((prev) => prev + 1);
  };

  const handleIndicatorClick = (index) => {
    setActive(index);
  };

  return (
    <div className="p-20">
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className={active === 0 ? "hidden" : "block"}
        >
          prev
        </button>
        <div className="flex flex-col">
          {images.map((item, index) => (
            <img
              className={`${
                index === active ? "block" : "hidden"
              } rounded object-cover w-[120px] h-[120px]`}
              src={item}
              key={index}
              alt="g"
            />
          ))}

          {images.map((_, index) => (
            <span
              onClick={() => handleIndicatorClick(index)}
              key={index}
              className={`${
                active === index ? "bg-green-500" : "bg-gray-200"
              }  rounded-full w-10 h-10`}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={active === 2 ? "hidden" : "block"}
        >
          next
        </button>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { REST_API } from "./exercises/data";
export const App = () => {
  const [data, setData] = useState(REST_API);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "" || search === null) {
      setData(REST_API);
    }
  }, [search]);

  const handleSearchSubmit = () => {
    if (!search) return;

    setLoading(true);
    setTimeout(() => {
      const filteredData = REST_API.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      setData(filteredData);
      setLoading(false);
    }, "5000");
  };

  const filterAvailability = () => {
    setData((prev) => prev.filter((item) => item.available));
  };

  const sortprice = () => {
    setData((prev) => [...prev].sort((a, b) => a.price - b.price));
  };

  const toggleAvailability = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  return (
    <div className="p-20">
      <div className="flex items-center gap-3 mb-3">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="search"
          className="border border-green-300 rounded  p-3"
        />
        <button
          className="text-white p-2 rounded bg-blue-600"
          onClick={handleSearchSubmit}
        >
          search
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loader border-t-transparent border-solid border-4 border-gray-300 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : data.length === 0 ? (
        <p>no items found </p>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            className={`${
              item.available ? "border-green-500" : "border-red-500"
            } bg-slate-50 rounded p-2 shadow-md mb-3 border`}
          >
            <h1 className="font-bold">{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
          </div>
        ))
      )}
      <button onClick={filterAvailability}>Filter Available</button>
      <button onClick={sortprice}>Sort Price</button>
      <button onClick={() => toggleAvailability(1)}>
        Toggle availability with id with 1
      </button>
    </div>
  );
};
