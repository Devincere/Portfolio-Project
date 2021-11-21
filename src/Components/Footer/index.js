import React from "react";
import "./style.css";
import ButtonMailto from "./MailTo";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <>
    <div className="container-fluid footer">
      <div className="row justify-content-center">
        <div className="col-md-1 col-3 text-center social">
          <a
            href="https://www.linkedin.com/in/vincent-durox-705301ba/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="social bi bi-linkedin"></i>
          </a>
        </div>
        <div className="col-md-1 col-3 text-center social">
          <a
            href="https://github.com/Vinc4dev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="social bi bi-github"></i>
          </a>
        </div>
        <div className="col-md-1 col-3 text-center social">
          <ButtonMailto mailto="mailto:hilltop_horizon.0l@icloud.com" />
        </div>
      </div>

      <div className="row justify-content-center text-center">
        <li className="col-md-2 col-3 foot-item">
          <NavLink exact to="/" className="foot-link">
            Home
          </NavLink>
        </li>
        <li className="col-md-2 col-3 foot-item">
          <NavLink to="/projects" className="foot-link">
            Projects
          </NavLink>
        </li>
        <li className="col-md-2 col-3 foot-item">
          <NavLink to="/contact" className="foot-link">
            Contact
          </NavLink>
        </li>
      </div>
    </div>
  </>
);

export default Footer;
