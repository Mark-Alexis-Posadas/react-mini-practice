import React from "react";
import "./index.css";
import data from "./data.js";
import JobListing from "./components/JobListing/JobListing";

const App = () => {
  return (
    <div>
      <JobListing dataProps={data} />
    </div>
  );
};

export default App;
