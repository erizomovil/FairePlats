import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaSliders } from "react-icons/fa6";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <div className="navbar-mobile">
          <div className="navbar-input">
            <BsSearch className="icon" />
            <input
              type="search"
              className="search-input"
              placeholder="buscar"
              aria-label="Buscar"
            />
            <FaSliders className="icon" />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
