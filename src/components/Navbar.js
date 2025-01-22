import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Navbar Brand */}
        
        
        {/* Navbar Toggler for small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* Use Link for navigation */}
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              {/* Use Link for navigation */}
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              {/* Use Link for navigation */}
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



