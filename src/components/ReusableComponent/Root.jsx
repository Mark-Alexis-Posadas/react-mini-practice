import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

// ... rest of your code ...

import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";

const history = createBrowserHistory();

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Router history={history}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Router>
    </>
  );
}
