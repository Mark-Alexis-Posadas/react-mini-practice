import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Profile/Home";
import Details from "./components/Profile/Details";
const App = () => {
  const [inputVal, setInputVal] = useState("");

  const handleSearch = (e) => {
    setInputVal(e.target.value);
  };

  const handleSearchSubmit = () => {};

  return (
    <>
      <form
        onSubmit={handleSearchSubmit}
        className="p-6 bg-slate-50 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4"
      >
        <h1 className="font-bold text-lg text-gray-800">
          Grade 6 - B, Batch 2005 - 2006
        </h1>

        <div className="flex items-center gap-2">
          <input
            value={inputVal}
            onChange={handleSearch}
            type="text"
            placeholder="Search profile"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm transition"
          >
            Search
          </button>
        </div>

        <ul className="flex items-center gap-4 text-sm">
          <li className="text-green-600 font-medium hover:underline cursor-pointer">
            Home
          </li>
          <li className="text-gray-700 hover:text-blue-600 hover:underline cursor-pointer">
            About
          </li>
        </ul>
      </form>

      <Router>
        <div className="p-6 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
