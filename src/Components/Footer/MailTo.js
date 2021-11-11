import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      <i class="social bi bi-envelope-fill"></i>
    </Link>
  );
};

export default ButtonMailto;
