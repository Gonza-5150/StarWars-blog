import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-secondary mb-3 border-bottom border-3 border-warning">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 ">
          <img
            src="https://seeklogo.com/images/S/star-wars-logo-80607D2AC5-seeklogo.com.png"
            width="80"
            height="80"
          />
        </span> 
      </Link>

      <Link className="btn border-dark nav-link link-dark shadow-lg  rounded " to="/characters">Personajes</Link>

      <Link className="btn border-dark nav-link link-dark shadow-lg rounded" to="/planets">Planetas</Link>

      <Link className="btn border-dark nav-link link-dark shadow-lg rounded" to="/vehicles">Vehiculos</Link>

      <div className="dropdown ">
        <button
          className="btn btn-primary border-warning dropdown-toggle m-3 opacity-50"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu">
          {store.favorites.map((element, index) =>{
            return(
              <li>
            <a className="dropdown-item" href="#">
              {element.name}
            </a>
            <button onClick={()=> actions.delleteFav(index)}>borrar</button>
          </li>
            )
          })}
         
          
        </ul>
      </div>
    </nav>
  );
};
