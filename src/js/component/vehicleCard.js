import React, { Component, useContext } from "react";
import getState from "../store/flux";
import { Context } from "../store/appContext";

export const VehicleCard = ({ name, uid }) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card col-3 border-warning mx-1 bg-secondary shadow-lg">
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${uid + 3}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text newFont"></p>
        <a
          href={`/vehicles/${uid}`}
          className="btn btn-info opacity-50 border-warning"
        >
          Mas información
        </a>
        <button className="btn btn-warning" type="button" onClick={()=>actions.addFav({id:uid, name:name})}>add</button>
      </div>
    </div>
  );
};
