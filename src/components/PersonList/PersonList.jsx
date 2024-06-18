import { useState } from "react";

let people = [
  {
    name: "John Doe",
    age: 30,
    gender: "Male",
    occupation: "Software Engineer",
    city: "New York",
    country: "USA",
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "Female",
    occupation: "Doctor",
    city: "London",
    country: "UK",
  },
  {
    name: "David Brown",
    age: 35,
    gender: "Male",
    occupation: "Teacher",
    city: "Sydney",
    country: "Australia",
  },
];

export default function PersonList() {
  const [inputVal, setInputVal] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    city: "",
    country: "",
  });

  const [peopleList, setPeopleList] = useState(people);
  const [showInput, setShowInput] = useState(false);
  const [activeList, setActiveList] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    setShowInput(true);
  };

  const handleEdit = (idx) => {
    setInputVal(peopleList[idx]);
    setActiveList(idx);
    setShowInput(true);
  };

  const handleCancel = () => {
    setActiveList("");
    setShowInput(false);
    setInputVal({
      name: "",
      age: "",
      gender: "",
      occupation: "",
      city: "",
      country: "",
    });
  };

  const handleDelete = (index) => {
    const deleteItem = peopleList.filter((_, idx) => idx !== index);
    setPeopleList(deleteItem);
  };

  const handleSubmit = () => {
    if (activeList !== null) {
      // Editing existing item
      const updatedPeopleList = [...peopleList];
      updatedPeopleList[activeList] = inputVal;
      setPeopleList(updatedPeopleList);
    } else {
      // Adding new item
      setPeopleList((prevPeopleList) => [...prevPeopleList, inputVal]);
    }

    // Reset input fields and state after submission
    setInputVal({
      name: "",
      age: "",
      gender: "",
      occupation: "",
      city: "",
      country: "",
    });

    // Reset activeList to null
    setActiveList(null);

    setShowInput(false);
  };

  return (
    <div className="p-5 md:p-20 relative bg-slate-50 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-4xl">Person List</h1>
        <button
          className="bg-blue-600 text-white font-bold text-sm p-2 rounded"
          onClick={handleAdd}
        >
          Add Person
        </button>
      </div>
      <ul className="grid md:grid-cols-3 md:gap-3">
        {peopleList.map((item, index) => {
          const { name, age, gender, occupation, city, country } = item;
          return (
            <li
              className={`${
                index === activeList
                  ? "border border-green-700 bg-green-50 text-white"
                  : "bg-white text-black"
              } shadow-md p-2 rounded my-3 flex flex-col md:flex-row md:items-center justify-between`}
              key={index}
            >
              <ul>
                <li className="font-bold text-purple-600 flex items-center gap-3">
                  Name:{" "}
                  <span className="text-black text-sm font-light">{name}</span>
                </li>
                <li className="font-bold text-purple-600 flex items-center gap-3">
                  Age:{" "}
                  <span className="text-black text-sm font-light">{age}</span>
                </li>
                <li className="font-bold text-purple-600 flex items-center gap-3">
                  Gender:{" "}
                  <span className="text-black text-sm font-light">
                    {gender}
                  </span>
                </li>
                <li className="font-bold text-purple-600 flex items-center gap-3">
                  Occupation:{" "}
                  <span className="text-black text-sm font-light">
                    {occupation}
                  </span>
                </li>
                <li className="font-bold text-purple-600 flex items-center gap-3">
                  City:{" "}
                  <span className="text-black text-sm font-light">{city}</span>
                </li>
                <li className="font-bold text-purple-600 flex items-center gap-3">
                  Country:{" "}
                  <span className="text-black text-sm font-light">
                    {country}
                  </span>
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-5 md:mt-0">
                <button
                  className="bg-blue-600 text-white font-bold text-sm p-2 rounded"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white font-bold text-sm p-2 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {showInput && (
        <div className="absolute top-0 w-full min-h-screen left-0 p-20 bg-[rgba(0,0,0,0.4)] bottom-0">
          <form>
            <div className="my-3">
              <input
                type="text"
                className="p-3 rounded text-black bg-slate-200 w-full flex-1"
                placeholder="Name"
                name="name"
                value={inputVal.name}
                onChange={handleChange}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="p-3 rounded text-black bg-slate-200 w-full flex-1"
                placeholder="Age"
                name="age"
                value={inputVal.age}
                onChange={handleChange}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="p-3 rounded text-black bg-slate-200 w-full flex-1"
                placeholder="Gender"
                name="gender"
                value={inputVal.gender}
                onChange={handleChange}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="p-3 rounded text-black bg-slate-200 w-full flex-1"
                placeholder="Occupation"
                name="occupation"
                value={inputVal.occupation}
                onChange={handleChange}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="p-3 rounded text-black bg-slate-200 w-full flex-1"
                placeholder="City"
                name="city"
                value={inputVal.city}
                onChange={handleChange}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="p-3 rounded text-black bg-slate-200 w-full flex-1"
                placeholder="Country"
                name="country"
                value={inputVal.country}
                onChange={handleChange}
              />
            </div>
          </form>
          <div className="flex items-center gap-2">
            <button
              className="bg-red-700 p-3 rounded text-white"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="bg-blue-700 p-3 rounded text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
