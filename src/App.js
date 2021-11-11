import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/index";
import Projects from "./Pages/Projects";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <nav className="Header">
        <Nav />
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
