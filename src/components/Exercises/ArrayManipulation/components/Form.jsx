const FormModal = ({
  setFilteredActiveUser,
  open,
  setOpen,
  formValues,
  initialValues,
  setFormValues,
  isEditing,
  setIsEditing,
  editId,
  filteredActiveUser,
}) => {
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: isEditing ? editId : filteredActiveUser.length + 1,
      name: formValues.name,
      age: formValues.age,
      gender: formValues.gender,
      status: formValues.status,
    };
    if (
      !formValues.name ||
      !formValues.age ||
      !formValues.gender ||
      !formValues.status
    ) {
      alert("Please fill out all fields before submitting.");
      return; // stop execution
    }

    if (isEditing) {
      setFilteredActiveUser((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
    } else {
      setFilteredActiveUser((prev) => [...prev, formData]);
    }

    setOpen(false);
  };

  return (
    <div className="my-5">
      <button
        onClick={() => (
          setOpen(true), setIsEditing(false), setFormValues(initialValues)
        )}
        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition font-medium"
      >
        Add User
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
              User Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formValues.name}
                onChange={handleFormChange}
                className="w-full p-3 rounded-lg bg-white text-gray-700 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />

              <input
                name="age"
                type="number"
                placeholder="Age"
                value={formValues.age}
                onChange={handleFormChange}
                className="w-full p-3 rounded-lg bg-white text-gray-700 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />

              <select
                name="gender"
                value={formValues.gender}
                onChange={handleFormChange}
                className="w-full p-3 rounded-lg bg-white text-gray-700 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
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
                className="w-full p-3 rounded-lg bg-white text-gray-700 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              >
                <option disabled value="">
                  Select status
                </option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-sm"
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
