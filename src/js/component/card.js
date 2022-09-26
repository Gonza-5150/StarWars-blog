import React, { Component, useContext } from "react";
import getState from "../store/flux";
import { Context } from "../store/appContext";

export const Card = ({ name, uid, json }) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card col-3 mx-1 border-warning bg-secondary shadow-lg">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"></p>
        <a
          href={`/character/${uid}`}
          className="btn btn-info border-warning opacity-50"
        >
          Mas información
        </a>
        <button className="btn btn-warning" type="button" onClick={()=>actions.addFav({id:uid, name:name})}>add</button>
      </div>
    </div>
  );
};
