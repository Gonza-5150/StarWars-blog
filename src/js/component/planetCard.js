import React, { Component, useContext } from "react";
import { useState, useEffect } from "react";
import getState from "../store/flux";
import { Context } from "../store/appContext";


export const PlanetCard = ({ name, url, uid }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card col-3 border-warning mx-1 bg-secondary shadow-lg opacity-60">
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{url}</p>
        <a
          href={`/planets/${uid}`}
          className="btn btn-info border-warning opacity-50"
        >
          Mas información
        </a>
        <button className="btn btn-warning" type="button" onClick={()=>actions.addFav({id:uid, name:name})}>add</button>
      </div>
    </div>
  );
};
