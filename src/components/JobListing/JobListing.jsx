import React from "react";

const JobListing = ({ dataProps }) => {
  return (
    <>
      {dataProps.map((data) => {
        const {
          id,
          company,
          logo,
          featured,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          tools,
        } = data;
        return (
          <div key={id}>
            <img src={logo} alt="logo" />
            <div>
              <h2>{company}</h2>
              <h1>{position}</h1>
              <div className="d-flex align-items-center">
                <span>{postedAt}</span>
                <span>{contract}</span>
                <span>{location}</span>
              </div>
            </div>
            <figcaption>
              {data.languages.map((language, idx) => {
                return <span key={idx}>{language}</span>;
              })}
            </figcaption>
          </div>
        );
      })}
    </>
  );
};

export default JobListing;
