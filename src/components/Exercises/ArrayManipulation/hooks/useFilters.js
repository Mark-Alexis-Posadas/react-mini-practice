import { useMemo, useState } from "react";

export const useFilters = (users) => {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("ascending");

  const filteredUsers = useMemo(() => {
    let result = [...users];

    if (status !== "all") {
      result = result.filter((u) => u.status === status);
    }

    if (gender !== "all") {
      result = result.filter((u) => u.gender.toLowerCase() === gender);
    }

    if (search) {
      result = result.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    result.sort((a, b) =>
      sort === "ascending" ? a.age - b.age : b.age - a.age
    );

    return result;
  }, [users, search, gender, status, sort]);

  return {
    filteredUsers,
    search,
    setSearch,
    gender,
    setGender,
    status,
    setStatus,
    sort,
    setSort,
  };
};
