import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchPaginate = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentActive, setCurrentActive] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [currentPage]);

  const handlePageChange = (pageNumber, index) => {
    setCurrentPage(pageNumber);
    setCurrentActive(index);
  };

  const totalPages = Math.ceil(100 / itemsPerPage); // Adjust the total items according to the API

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber, index) => (
            <button
              className={`rounded p-2 w-10 h-10 ${
                index + 1 === currentActive
                  ? "bg-blue-500 text-white"
                  : "text-slate-100 bg-gray-300"
              }`}
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default FetchPaginate;
