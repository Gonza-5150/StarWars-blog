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
    <div>
      <div className="card col-3 border-warning mx-1 bg-secondary shadow-lg">
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{store.vehicleEach?.name}</h5>
          <p className="card-text newFont">
            <b>Model:{store.vehicleEach?.model}</b>
          </p>
          <p className="card-text newFont">
            <b>Length:{store.vehicleEach?.length}</b>
          </p>
          
          
        </div>
      </div>
    </div>
  );
};
