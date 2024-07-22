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
