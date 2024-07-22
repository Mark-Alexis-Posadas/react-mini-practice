import { useState, useEffect } from "react";
export default function Country() {
  const [countries, setCountries] = useState([]);

  function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchCountries();
  }, []);

  const handleCountryChange = (event) => {
    // Handle country change here if needed
    console.log("Selected country:", event.target.value);
  };

  return (
    <div>
      <select onChange={handleCountryChange}>
        {countries.map((country, index) => (
          <option key={index} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}
