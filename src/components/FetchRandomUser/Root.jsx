import React, { useEffect, useState } from "react";
import Users from "./Users";
const Root = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error(error));
  };

  return (
    <div className="text-center">
      {user && (
        <div>
          <Users userProps={user} />
          <button className="btn btn-primary my-5" onClick={fetchRandomUser}>
            Fetch random user
          </button>
        </div>
      )}
    </div>
  );
};

export default Root;
