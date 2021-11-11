import React from "react";
//import {Link} from "react-router-dom";
import "./Nav.css";
import NavLinks from "./NavLinks";

import logo from "../Navbar/logo1.png";

const Nav = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 col-10 justify-content-left py-auto" id="Navbar">
        <img
          alt="logo"
          src={logo}
          width="80"
          height="80"
          className="d-inline-block"
        />{" "}
        <h2 className="title-link d-inline-block text-light my-0">
          Vincent Durox
        </h2>
      </div>
      <NavLinks />
    </div>
  </div>
);

export default Nav;
