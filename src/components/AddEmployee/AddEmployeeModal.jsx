export default function AddEmployeeModal({ state }) {
  return (
    <div className="w-full h-full top-0 left-0 overflow-auto z-10 fixed bg-black bg-opacity-40 flex">
      <form className="bg-white shadow-md p-3 rounded w-[600px] m-auto">
        <h2 className="mb-3 font-bold text-xl">Add Employee</h2>
        <div className="flex flex-col">
          <label htmlFor="firstName">First name</label>
          <input
            className="border border-slate-300 p-2 rounded"
            type="text"
            placeholder="first name"
            name="firstName"
            id="first_name"
            value={state.firstName}
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
          />
        </div>
        <button className="text-white bg-blue-500 rounded p-2 w-full mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
