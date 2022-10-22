import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory()

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

      <Link className="btn border-dark nav-link link-dark shadow-lg rounded" to="/">Home</Link>
    
      <button className="btn border-dark nav-link link-dark shadow-lg rounded" onClick={() => {
        //history.push("/login")
        window.location.href = "/login"

        sessionStorage.removeItem("token")
        }}>Logout</button>

      <div className="dropdown ">
        <button
          className="btn btn-primary border-warning dropdown-toggle m-3 opacity-50"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu text-center m-2">
          {store.favorites.map((element, index) =>{
            return(
              <li>
            <a className="dropdown-item" href="#">
              {element.name}
            </a>
            <button class="btn btn-outline-danger opacity-50" onClick={()=> actions.delleteFav(index)}>borrar</button>
          </li>
            )
          })}
         
          
        </ul>
      </div>
    </nav>
  );
};
