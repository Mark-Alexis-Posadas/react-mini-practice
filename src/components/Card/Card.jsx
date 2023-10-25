import { useEffect, useState } from "react";
import Cards from "./Cards";
const url = "https://course-api.com/react-tours-project";
export default function Card() {
  const [cards, setCards] = useState([]);
  const fetchData = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCards(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mt-5">
      <Cards cards={cards} setCards={setCards} />
    </div>
  );
}
