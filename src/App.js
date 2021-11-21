import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/index";
import Projects from "./Pages/Projects";

// Importing the Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <head>
        <meta charset="UTF-8" />
        <meta name="description" content="portfolio" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Vincent Durox" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Devincere</title>
      </head>
      <header>
        <Nav />
      </header>
      <body>
        <div id="main-content">
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
