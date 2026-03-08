import { useState } from "react";
import { users as initialUsers } from "../data/data";

export const useUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (user) => {
    setUsers((prev) => [...prev, { ...user, id: prev.length + 1 }]);
  };

  const updateUser = (id, data) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...data } : u)));
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return {
    users,
    selectedUser,
    setSelectedUser,
    addUser,
    updateUser,
    deleteUser,
  };
};
