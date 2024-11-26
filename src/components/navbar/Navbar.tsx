import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaSliders } from "react-icons/fa6";
import "./Navbar.css";

interface NavbarProps {
  onSearchChange: (searchTerm: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <div className="navbar-mobile">
          <div className="navbar-input">
            <BsSearch className="icon" />
            <input
              type="search"
              className="search-input"
              placeholder="search"
              aria-label="Search"
              onChange={handleInputChange}
            />
            <FaSliders className="icon" />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
