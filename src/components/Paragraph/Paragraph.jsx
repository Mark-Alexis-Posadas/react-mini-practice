import React, { useState } from "react";

const Paragraph = () => {
  const [showMore, setShowMore] = useState(false);
  const myString =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A iure, velit temporibus vitae ad repellat autem laboriosam soluta dolor aut, aliquam debitis consequuntur accusamus nostrum ullam voluptatum earum corporis totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A iure, velit temporibus vitae ad repellat autem laboriosam soluta dolor aut, aliquam debitis consequuntur accusamus nostrum ullam voluptatum earum corporis totam.";

  const handleClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="p-5 container">
      <p className="lead">
        {showMore ? myString : `${myString.substring(0, 250)}`}

        <button className="btn btn-primary" onClick={handleClick}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </p>
    </div>
  );
};

export default Paragraph;
