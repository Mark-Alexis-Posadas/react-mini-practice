import { useState } from "react";
import { users } from "./data";
import Card from "./Card";
import Navbar from "./Navbar";
import FormModal from "./Form";

const ArrayManipulation = () => {
  const [filteredActiveUser, setFilteredActiveUser] = useState(users);
  const [value, setValue] = useState("all");

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

  return (
    <div className="space-y-6 p-6">
      <Navbar
        value={value}
        handleChange={handleChange}
        active={active}
        filteredActiveUser={filteredActiveUser}
        setFilteredActiveUser={setFilteredActiveUser}
      />
      <FormModal setFilteredActiveUser={setFilteredActiveUser} />
      <div className="grid grid-cols-3 gap-4">
        {filteredActiveUser.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ArrayManipulation;
