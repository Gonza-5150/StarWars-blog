import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-secondary mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://seeklogo.com/images/S/star-wars-logo-80607D2AC5-seeklogo.com.png"
            width="80"
            height="80"
          />
        </span> 
      </Link>

      <Link className="nav-link link-dark shadow-lg rounded" to="/characters">Personajes</Link>

      <Link className="nav-link link-dark shadow-lg rounded" to="/planets">Planetas</Link>

      <Link className="nav-link link-dark shadow-lg rounded" to="/vehicles">Vehiculos</Link>

      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle opacity-50"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Una cosa
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
