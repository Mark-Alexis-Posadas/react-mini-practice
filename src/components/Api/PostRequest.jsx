import React from "react";

export const PostRequest = ({ inputFields, handleChange, handleSubmit }) => {
  return (
    <form
      className="border border-slate-30 p-3 rounded"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold">post request</h1>
      <div className="flex flex-col">
        <label>first name</label>
        <input
          onChange={handleChange}
          value={inputFields.firstName}
          name="firstName"
          className="text-gray-500 border border-slate-300 p-2 rounded"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label>last name</label>
        <input
          onChange={handleChange}
          value={inputFields.lastName}
          name="lastName"
          className="text-gray-500 border border-slate-300 p-2 rounded"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label>email</label>
        <input
          onChange={handleChange}
          value={inputFields.email}
          name="email"
          className="text-gray-500 border border-slate-300 p-2 rounded"
          type="email"
        />
      </div>
      <button className="text-white p-2 rounded bg-blue-500 mt-5">
        submit
      </button>
    </form>
  );
};
