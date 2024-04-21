export default function AddEmployeeModal({
  state,
  handleChange,
  handleSubmit,
  handleClose,
  employeeTitle,
}) {
  return (
    <div className="w-full h-full top-0 left-0 overflow-auto z-10 fixed bg-black bg-opacity-40 flex">
      <form className="bg-white shadow-md p-3 rounded w-[600px] m-auto">
        <header className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-xl">{employeeTitle} Employee</h2>
          <button
            className="rounded-full p-2 text-white bg-red-600 w-6 h-6 flex items-center justify-center"
            onClick={handleClose}
          >
            x
          </button>
        </header>
        <div className="flex flex-col">
          <label htmlFor="firstName">First name</label>
          <input
            className="border border-slate-300 p-2 rounded"
            type="text"
            placeholder="first name"
            name="firstName"
            id="first_name"
            value={state.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="lastName">Last name</label>
          <input
            className="border border-slate-300 p-2 rounded"
            type="text"
            placeholder="last name"
            name="lastName"
            id="last_name"
            value={state.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName">email</label>
          <input
            className="border border-slate-300 p-2 rounded"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-500 rounded p-2 w-full mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
