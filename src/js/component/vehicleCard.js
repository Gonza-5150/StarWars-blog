import React, { Component } from "react";
import getState from "../store/flux";

export const VehicleCard = ({name, uid, model, length, clas}) => {
  return (
    <div className="card col-3 border-warning mx-1 bg-secondary shadow-lg">
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text newFont">
                  <b>Model:{model}</b> 
                </p>
                <p className="card-text newFont">
                  <b>Length:{length}</b> 
                </p>
                <p className="card-text newFont">
                  <b>Class:{clas}</b> 
                </p>
        <a href={`/vehicles/${uid}`} className="btn btn-info opacity-50 border-warning">
          Mas info
        </a>
      </div>
    </div>
  );
};
