import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  let login = localStorage.getItem("login");

  return (
    <div className="navbar">
      <div className="navbar-block">
        <div className="navbar-block-brand">
          <div className="navbar-block-brand-logo">
            <NavLink to="/">
              <b>AMI</b> Network
            </NavLink>
          </div>
        </div>
        <div className="navbar-block-pages">
          <ul>
            <NavLink to="/admin">{login ? login : "Log In"}</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
