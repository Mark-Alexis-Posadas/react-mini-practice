import { useState } from "react";

const productItems = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 699.99 },
  { id: 3, name: "Tablet", price: 299.99 },
  { id: 4, name: "Headphones", price: 149.99 },
  { id: 5, name: "Smartwatch", price: 199.99 },
];

export default function Search() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(productItems);
  const [active, setActive] = useState(0);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    const filterProducts = productItems.filter((item) =>
      item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setProducts(filterProducts);
  };

  const handleClick = (productName, index) => {
    setSearch(productName);
    setActive(index);
  };

  return (
    <div className="p-20">
      <input
        type="text"
        className="bg-slate-100 rounded p-4 text-green-500 border border-green-700 w-full"
        placeholder="search"
        onChange={handleSearch}
        value={search}
      />
      <ul>
        {products.map((product, index) => (
          <li
            key={product.id}
            className={`${
              index === active ? "bg-green-300" : "bg-white"
            } p-4 border-2 border-green-500 my-2 cursor-pointer`}
            onClick={() => handleClick(product.name, index)}
          >
            <h4 className="font-bold text-sm">{product.name}</h4>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
