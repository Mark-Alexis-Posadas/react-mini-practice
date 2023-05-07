import React, { useState } from "react";
import style from "/src/styles/listing.module.css";

const JobListing = ({ dataProps }) => {
  const [value, setValue] = useState([]);

  const handleClick = (e) => {
    const language = e.target.innerHTML;
    if (!value.some((item) => item.language === language)) {
      const id = Date.now();
      setValue([...value, { language, id }]);
    }
  };

  const handleRemove = (id) => {
    const newValue = value.filter((item) => item.id !== id);
    setValue(newValue);
  };

  return (
    <>
      <div>
        {value.map((item) => (
          <div key={item.id}>
            <span>{item.language}</span>
            <button onClick={() => handleRemove(item.id)}>x</button>
          </div>
        ))}
      </div>
      {dataProps.map((data) => {
        const {
          id,
          company,
          logo,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          tools,
        } = data;

        return (
          <article key={id} className={style.article}>
            <img src={logo} alt="logo" />
            <div>
              <div>
                <h2>{company}</h2>
              </div>
              <h1>{position}</h1>
              <div className="d-flex align-items-center">
                <span>{postedAt}</span>
                <span>{contract}</span>
                <span>{location}</span>
              </div>
            </div>
            <figcaption>
              {data.languages.map((language, idx) => {
                return (
                  <button type="button" key={idx} onClick={handleClick}>
                    {language}
                  </button>
                );
              })}
            </figcaption>
          </article>
        );
      })}
    </>
  );
};

export default JobListing;
