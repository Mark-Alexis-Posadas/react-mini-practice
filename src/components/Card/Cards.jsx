import { useState } from "react";

export default function Cards({ cards, setCards }) {
  const [showMore, setShowMore] = useState({});
  function handleDelete(idx) {
    const removeCard = cards.filter((_, index) => index !== idx);
    setCards(removeCard);
  }

  const toggleShowMore = (id) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [id]: !prevShowMore[id],
    }));

    console.log(setShowMore);
  };

  return (
    <div className="row">
      {cards.length === 0 && <p>No tours available</p>}
      {cards.map((card, index) => (
        <div className="col-lg-4" key={card.id}>
          <div className="card">
            <img
              src={card.image}
              alt={card.name}
              className="img-fluid rounded"
            />
            <div className="card-body">
              <h5 className="card-title">{card.name}</h5>
              <p className="card-text">
                {showMore[card.id]
                  ? card.info
                  : `${card.info.substring(0, 250)}`}

                <a href="#" onClick={() => toggleShowMore(card.id)}>
                  {showMore[card.id] ? "Show less" : "Show more"}
                </a>
              </p>

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
                Not Interested
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
