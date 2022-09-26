import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { PlanetCard } from "../component/planetCard";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.eachPlanet(params.theid);
  }, []);

  console.log(store.planetEach);

  return (
    <div class="d-flex justify-content-center bg-dark">
      <div className="card col-4 border-warning mx-1 bg-secondary shadow-lg opacity-60">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{store.planetEach?.name}</h5>
          <p className="card-text">
            <ul>
              <li> Diametro: {store.planetEach?.diameter} </li>
              <li> Clima: {store.planetEach?.climate} </li>
              <li>Cantidad de habitantes: {store.planetEach?.population}</li>
              <li>Gravedad: {store.planetEach?.gravity}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
