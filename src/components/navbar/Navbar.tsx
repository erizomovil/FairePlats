import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex justify-content-between w-100">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src="logo.png"
              alt="Logo"
              width="30"
              height="30"
              className="me-2"
            />
            <span>Faire Plats</span>
          </div>
          <div className="d-flex">
            <input
              type="search"
              className="form-control me-2"
              placeholder="buscar"
              aria-label="Buscar"
            />
            <div>
              <BsSearch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
