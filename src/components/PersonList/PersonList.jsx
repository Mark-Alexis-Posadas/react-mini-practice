import { useState } from "react";
import Item from "./Item";
import { FormInputItem } from "./FormInputItem";

import { people } from "./data";

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

  function handleChange(e) {
    const { name, value } = e.target;
    setInputVal((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleAdd() {
    setShowInput(true);
  }

  function handleEdit(idx) {
    console.log(peopleList[idx]);
    setInputVal(peopleList[idx]);
    setActiveList(idx);
    setShowInput(true);
  }

  function handleCancel() {
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
  }

  function handleDelete(index) {
    const deleteItem = peopleList.filter((_, idx) => idx !== index);
    setPeopleList(deleteItem);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
    setTimeout(() => {
      setActiveList(null);
    }, 3000);

    setShowInput(false);
  }

  return (
    <div className="p-5 md:p-20 relative bg-black min-h-screen">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-4xl text-white">Person List</h1>
        <button
          className="bg-blue-600 text-white font-bold text-sm p-2 rounded"
          onClick={handleAdd}
        >
          Add Person
        </button>
      </div>
      {peopleList.length === 0 ? (
        "No person list"
      ) : (
        <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Occupation
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {peopleList.map((item, index) => (
              <Item
                key={index}
                index={index}
                {...item}
                activeList={activeList}
                handleEdit={() => handleEdit(index)}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}

      {showInput && (
        <div className="absolute top-0 w-full min-h-screen left-0 p-10 md:p-20 bg-[rgba(0,0,0,0.4)] bottom-0 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="dark:bg-gray-800 p-10 rounded"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-3">
              {Object.keys(inputVal).map((key, index) => (
                <FormInputItem
                  key={key}
                  index={index}
                  itemKey={key}
                  itemValue={inputVal[key]}
                  handleChange={handleChange}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <button
                className="bg-red-700 p-2 rounded text-white"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-blue-700 p-2 rounded text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
