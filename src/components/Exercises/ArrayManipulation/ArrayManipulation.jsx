import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import FormModal from "./components/Form";
import ViewUser from "./components/ViewUser";
import ConfirmationDelete from "./components/ConfirmationDelete";

import { useUsers } from "./hooks/useUsers";
import { useFilters } from "./hooks/useFilters";
import { useModal } from "./hooks/useModal";

const ArrayManipulation = () => {
  const [filteredActiveUsers, setFilteredActiveUser] = useState([]);

  const {
    users,
    selectedUser,
    setSelectedUser,
    addUser,
    updateUser,
    deleteUser,
  } = useUsers();

  const {
    filteredUsers,
    search,
    setSearch,
    gender,
    setGender,
    status,
    setStatus,
    sort,
    setSort,
  } = useFilters(users);

  const {
    isFormOpen,
    setIsFormOpen,
    isViewOpen,
    setIsViewOpen,
    isDeleteOpen,
    setIsDeleteOpen,
  } = useModal();

  return (
    <div className="p-6">
      <Navbar
        search={search}
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
        sort={sort}
        setSort={setSort}
        active={users.filter((u) => u.status === "active").length}
        setFilteredActiveUser={setFilteredActiveUser}
      />

      <div className="grid grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <Card
            key={user.id}
            user={user}
            onView={() => {
              setSelectedUser(user);
              setIsViewOpen(true);
            }}
            onEdit={() => {
              setSelectedUser(user);
              setIsFormOpen(true);
            }}
            onDelete={() => {
              setSelectedUser(user);
              setIsDeleteOpen(true);
            }}
          />
        ))}
      </div>

      {isFormOpen && (
        <FormModal
          user={selectedUser}
          onClose={() => setIsFormOpen(false)}
          onSubmit={(data) =>
            selectedUser ? updateUser(selectedUser.id, data) : addUser(data)
          }
        />
      )}

      {isViewOpen && (
        <ViewUser user={selectedUser} onClose={() => setIsViewOpen(false)} />
      )}

      {isDeleteOpen && (
        <ConfirmationDelete
          displayName={selectedUser?.name}
          onProceed={() => {
            deleteUser(selectedUser.id);
            setIsDeleteOpen(false);
          }}
          onCancel={() => setIsDeleteOpen(false)}
        />
      )}
    </div>
  );
};

export default ArrayManipulation;
