const FormModal = ({
  setFilteredActiveUser,
  open,
  setOpen,
  formValues,
  initialValues,
  setFormValues,
  isEditing,
  setIsEditing,
}) => {
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFilteredActiveUser((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: formValues.name,
        age: formValues.age,
        gender: formValues.gender,
        status: formValues.status,
      },
    ]);

    setOpen(false);
  };

  return (
    <div className="my-5">
      <button
        onClick={() => (
          setOpen(true), setIsEditing(false), setFormValues(initialValues)
        )}
        className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md hover:shadow-purple-500/30 transition font-semibold"
      >
        Add User
      </button>

      {open && (
        <div className="fixed top-0 inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-40">
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700/50 shadow-2xl w-full max-w-md relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center text-purple-400 tracking-wider mb-4">
              GAMING FORM
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formValues.name}
                onChange={handleFormChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 transition"
              />

              <input
                name="age"
                type="number"
                placeholder="Age"
                value={formValues.age}
                onChange={handleFormChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 transition"
              />

              <select
                name="gender"
                value={formValues.gender}
                onChange={handleFormChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 transition"
              >
                <option disabled value="">
                  Select gender
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>

              <select
                name="status"
                value={formValues.status}
                onChange={handleFormChange}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 transition"
              >
                <option disabled value="">
                  Select status
                </option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-white font-semibold tracking-wide shadow-md hover:shadow-purple-500/30"
              >
                {isEditing ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
