import React from "react";

import "./NavLinks.css";
import { List } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const NavLinks = () => (
  <>
    <nav class="col navbar navbar-expand-lg header">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <List class="navbar-toggler-icon" />
        </span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarToggler"
      >
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0" activeKey="/home">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default NavLinks;
