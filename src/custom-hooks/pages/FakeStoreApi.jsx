import { useFetch } from "../hooks/useFetch";

const FakeStore = () => {
  const { data } = useFetch("https://fakestoreapi.com/products");
  console.log(data);
  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((item) => {
        const { id, title, price, description, catergory, image, ratings } =
          item;
        return (
          <div key={id} className="bg-slate-300 shadow-md p-3">
            <img src={image} alt="image" />
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{price}</span>
            <span>{catergory}</span>
            {ratings}
          </div>
        );
      })}
    </div>
  );
};

export default FakeStore;
