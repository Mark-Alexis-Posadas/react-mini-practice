## Steps:

- Initialize active to zero

```jsx
const [active, setActive] = useState(0);
```

- Initialize product to products array of objects

```jsx
const [product, setProduct] = useState(products);
```

- Initialize inputValue to empty string

```jsx
const [inputValue, setInputValue] = useState("");
```

- Initialize to show input to false

```jsx
const [showInput, setShowInput] = useState(false);
```

- Initialize handeDelete function
- Add id parameter
- Initialize onDelete variable
- Check product id if not equal to id parameter
- setProducts to onDelete variable

```jsx
const handleDelete = (id) => {
  const onDelete = product.filter((item) => item.id !== id);
  setProduct(onDelete);
};
```

- Initialize handeInput

```jsx
const handleInput = (e) => {
  setInputValue(e.target.value);
};
```

- Initialize handeEdit

```jsx
const handleEdit = (index) => {
  const currentVal = product[index]; //curent price
  setInputValue(currentVal.price);
  setActive(index);
  setShowInput(true);
};
```

- Initialize handeSubmit

```jsx
const handleSubmit = () => {
  if (inputValue.trim() === "") {
    alert("Please add text");
    return;
  }
  setProduct((currentVal) =>
    currentVal.map((item, idx) =>
      idx === active ? { ...item, price: inputValue } : item
    )
  );
  setShowInput(false);
};
```
