import { useState } from "react";

export default function FormHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedValue, setSubmittedValue] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedValue((prev) => [...prev, name, email]);
    setName("");
    setEmail("");
  }

  return (
    <div className="p-4">
      <ul className="list-group mb-4">
        {submittedValue.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
}
