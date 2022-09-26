import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { VehicleCard } from "../component/vehicleCard";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.eachVehicle(params.theid);
  }, []);

  console.log(store.vehicleEach);

  return (
    <div class="d-flex justify-content-center bg-dark">
      <div className="card mt-3 col-4 border-warning mx-1 bg-secondary shadow-lg">
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{store.vehicleEach?.name}</h5>
          <p className="card-text newFont">
            <ul>
              <li> Fabricante: {store.vehicleEach?.manufacturer} </li>
              <li> Tripulación: {store.vehicleEach?.crew} </li>
              <li>Velocidad: {store.vehicleEach?.max_atmosphering_speed}</li>
              <li>Pasajeros: {store.vehicleEach?.passengers}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
