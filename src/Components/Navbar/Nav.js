import React from "react";
import logo from "./logo1.png";
import NavToggler from "./Navtoggler";
import "./Style.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid main-nav">
      <div className="navbrand">
        <img
          alt="logo"
          src={logo}
          width="80"
          height="80"
          className="d-inline-block"
        />{" "}
        <h2 className="title-link d-inline-block text-light align-middle">
          Vincent Durox
        </h2>
      </div>

      <NavToggler />
    </div>
  </nav>
);

export default Nav;
