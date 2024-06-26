import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><a href="/">TAT</a></div>
      <button className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <button className="close-icon" onClick={toggleMenu}>
          &times; {/* Close Icon */}
        </button>
        <li><NavLink to="/" exact onClick={toggleMenu}>Welcome</NavLink></li>
        <li><NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink></li>
        {/* <li><NavLink to="/reading-list" onClick={toggleMenu}>Reading List</NavLink></li> */}
        <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
