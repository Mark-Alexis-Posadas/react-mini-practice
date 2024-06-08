import { products } from "../data";

export default function RenderList() {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id} className="flex items-center gap-3">
          <h3 className="font-bold mb-3 text-blue-500">{item.name}</h3>
          <span>
            {item.description} -{" "}
            <small className="text-slate-400">{item.category}</small>
          </span>
          <button
            className={`${
              item.available
                ? "text-green-500"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            {item.available ? "available" : "not available"}
          </button>
        </li>
      ))}
    </ul>
  );
}
