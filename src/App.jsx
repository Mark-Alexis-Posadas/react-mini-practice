import { useEffect } from "react";
import { useState } from "react";
import { PostRequest } from "./components/Api/PostRequest";

const App = () => {
  const [data, setData] = useState([]);
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submittedData),
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [submittedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...submittedData, inputFields });
  };

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-20">
      {data.map((item) => (
        <li key={item.id} className="flex items-center gap-4">
          {item.firstName} - {item.lastName} - {item.email}
        </li>
      ))}

      {submittedData.map((item) => (
        <li key={item.id} className="flex items-center gap-4">
          {item.firstName} - {item.lastName} - {item.email}
        </li>
      ))}

      <PostRequest
        inputFields={inputFields}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
