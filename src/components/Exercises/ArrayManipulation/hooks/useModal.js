import { useState } from "react";

export const useModal = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return {
    isFormOpen,
    setIsFormOpen,
    isViewOpen,
    setIsViewOpen,
    isDeleteOpen,
    setIsDeleteOpen,
  };
};
