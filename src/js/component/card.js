import React, { Component } from "react";
import getState from "../store/flux";
import { Context } from "../store/appContext";

export const Card = ({name, uid}) => {
  return (
    <div className="card col-3 mx-1 border-warning bg-secondary shadow-lg">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href={`/character/${uid}`} className="btn btn-info border-warning opacity-50">
          Mas información
        </a>
      </div>
    </div>
  );
};
