import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <li className="nav-item">
          <a href="/tutorials" className="navbar-brand">
            Sithija
          </a>
        </li>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
