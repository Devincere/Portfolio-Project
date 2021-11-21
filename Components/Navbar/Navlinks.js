import React from "react";

import { NavLink } from "react-router-dom";

const NavLinks = () => (
  <div class="offcanvas-body justify-content-end">
    <ul className="navbar-nav" id="header-tabs">
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
);

export default NavLinks;
