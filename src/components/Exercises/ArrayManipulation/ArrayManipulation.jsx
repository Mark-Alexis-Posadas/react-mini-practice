import { useState } from "react";
import { users } from "./data";
import Card from "./Card";
import Navbar from "./Navbar";
import FormModal from "./Form";
import ViewUser from "./ViewUser";
import ConfirmationDelete from "./ConfirmationDelete";

const initialValues = {
  name: "",
  age: "",
  gender: "",
  status: "",
};

const ArrayManipulation = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [selectedUser, setSelectedUser] = useState(null);
  const [value, setValue] = useState("all");
  const [open, setOpen] = useState(false);
  const [isToggleViewUser, setIsToggleViewUser] = useState(false);
  const [isToggleDelete, setIsToggleDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [filteredActiveUser, setFilteredActiveUser] = useState(users);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const handleChange = (e) => {
    const selectedStatus = e.target.value;
    setValue(selectedStatus);

    if (selectedStatus === "all") {
      setFilteredActiveUser(users);
    } else {
      const result = users.filter((user) => user.status === selectedStatus);
      setFilteredActiveUser(result);
    }
  };

  const active = users.filter((user) => user.status === "active").length;

  const handleToggleEdit = (user) => {
    const normalizedUser = {
      ...user,
      gender: user.gender.toLowerCase(),
    };
    setEditId(user.id);
    setFormValues(normalizedUser);
    setOpen(true);
    setIsEditing(true);
  };

  const handleToggleViewUser = (user) => {
    setIsToggleViewUser(true);
    setSelectedUser(user);
  };

  const handleToggleDelete = (id) => {
    setIsToggleDelete(true);
    setDeleteId(id);
  };

  const handleProceedDelete = () => {
    const deleteItem = filteredActiveUser.filter(
      (user) => user.id !== deleteId
    );
    setFilteredActiveUser(deleteItem);
    setIsToggleDelete(false);
  };

  return (
    <div className="p-6">
      <Navbar
        value={value}
        handleChange={handleChange}
        active={active}
        filteredActiveUser={filteredActiveUser}
        setFilteredActiveUser={setFilteredActiveUser}
      />
      {isToggleDelete && (
        <ConfirmationDelete
          onProceed={handleProceedDelete}
          onCancel={() => {
            setIsToggleDelete(false), setDeleteId(null);
          }}
        />
      )}

      <FormModal
        setFilteredActiveUser={setFilteredActiveUser}
        open={open}
        setOpen={setOpen}
        formValues={formValues}
        setFormValues={setFormValues}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        initialValues={initialValues}
        editId={editId}
        filteredActiveUser={filteredActiveUser}
      />
      {isToggleViewUser && (
        <ViewUser
          selectedUser={selectedUser}
          setIsToggleViewUser={setIsToggleViewUser}
        />
      )}

      <div className="grid grid-cols-3 gap-4">
        {filteredActiveUser.length === 0 ? (
          <p>No user found</p>
        ) : (
          filteredActiveUser.map((user) => (
            <Card
              key={user.id}
              user={user}
              onEdit={handleToggleEdit}
              onView={handleToggleViewUser}
              onDelete={handleToggleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ArrayManipulation;
