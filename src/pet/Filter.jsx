import { useEffect, useState } from "react";
import { REST_API } from "../exercises/data";

export const Filter = () => {
  const [data, setData] = useState(REST_API);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "" || search === null) {
      setData(REST_API);
    }
  }, [search]);

  const handleSearchSubmit = () => {
    if (!search) return;

    setLoading(true);
    setTimeout(() => {
      const filteredData = REST_API.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      setData(filteredData);
      setLoading(false);
    }, "5000");
  };

  const filterAvailability = () => {
    setData((prev) => prev.filter((item) => item.available));
  };

  const sortprice = () => {
    setData((prev) => [...prev].sort((a, b) => a.price - b.price));
  };

  const toggleAvailability = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  return (
    <div className="p-20">
      <div className="flex items-center gap-3 mb-3">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="search"
          className="border border-green-300 rounded  p-3"
        />
        <button
          className="text-white p-2 rounded bg-blue-600"
          onClick={handleSearchSubmit}
        >
          search
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="loader border-t-transparent border-solid border-4 border-gray-300 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : data.length === 0 ? (
        <p>no items found </p>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            className={`${
              item.available ? "border-green-500" : "border-red-500"
            } bg-slate-50 rounded p-2 shadow-md mb-3 border`}
          >
            <h1 className="font-bold">{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
          </div>
        ))
      )}
      <button onClick={filterAvailability}>Filter Available</button>
      <button onClick={sortprice}>Sort Price</button>
      <button onClick={() => toggleAvailability(1)}>
        Toggle availability with id with 1
      </button>
    </div>
  );
};
