import React, { useState } from "react";

const TourList = ({ dataProp, setDataProp }) => {
  const [removedData, setRemovedData] = useState([]);

  const handleRemove = (id) => {
    const newData = dataProp.filter((data) => data.id !== id);
    setDataProp(newData);
    setRemovedData([...removedData, id]);
  };

  if (dataProp.length === 0) {
    return <h1>No more data</h1>;
  }

  const filteredData = dataProp.filter(
    (data) => !removedData.includes(data.id)
  );

  return (
    <div className="container mt-5 d-flex align-items-center justify-content-between">
      <h1>{dataProp.length} reminder</h1>
      {filteredData.map((data) => (
        <div className="d-flex flex-column" key={data.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
              <span>{data.price}</span>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => handleRemove(data.id)}
          >
            Not Interested
          </button>
        </div>
      ))}
    </div>
  );
};

export default TourList;
