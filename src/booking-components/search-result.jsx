import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [priceRange, setPriceRange] = useState([5000, 15000]);

  const filterResults = () => {
    const filtered = results.filter(
      (result) => result.price >= priceRange[0] && result.price <= priceRange[1]
    );
    setFilteredResults(filtered);
  };

  useEffect(() => {
    const fetchSearchResult = async () => {
      try {
        const response = await fetch("http://localhost:8000/data");
        const data = await response.json();
        setResults(data);
        setFilteredResults(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSearchResult();
  }, []);

  useEffect(() => {
    filterResults();
  }, [priceRange]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex">
      <aside className="w-1/4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Filter</h2>
        <div className="mb-6">
          <label htmlFor="priceRange" className="block text-lg mb-2">
            Price Range: {priceRange[0]} - {priceRange[1]} PHP
          </label>
          <Slider
            range
            min={5000}
            max={15000}
            defaultValue={priceRange}
            onChange={(value) => setPriceRange(value)}
          />
        </div>
      </aside>
      <div className="w-3/4 ml-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Search Results</h1>
        <ul className="space-y-4">
          {filteredResults.map((result, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{result.name}</h2>
              <p className="text-gray-600">Price: {result.price} PHP</p>
              <p className="text-gray-600">Location: {result.location}</p>
              <p className="text-gray-600">
                Features: {result.features.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
