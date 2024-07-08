const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    description: "A high-performance laptop for work and gaming.",
    category: "Electronics",
    available: true,
  },
  {
    id: 2,
    name: "Headphones",
    price: 149,
    description: "Wireless headphones with noise-cancellation feature.",
    category: "Electronics",
    available: false,
  },
];

//how to add new array
const handleAddNewArray = () => {
  const newItem = {
    id: uuidv4(),
    name: "Alexis",
    price: 1000,
    description: "pogi",
    category: "human",
    available: true,
  };

  setArr((prev) => {
    const updatedArr = [...prev, newItem];
    console.log(updatedArr);
    return updatedArr;
  });

  //OR

  setArr((prev) => [
    ...prev,
    {
      id: uuidv4(),
      name: "Alexis",
      price: 1000,
      description: "pogi",
      category: "human",
      available: true,
      //OR newItem
    },
  ]);
};

//how to update array of objects
const arr = products.map((product, index) =>
  index === 0
    ? {
        ...product,
        name: "computer",
      }
    : product
);
console.log(arr);
