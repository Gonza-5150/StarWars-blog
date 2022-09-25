import React, { Component } from "react";
import getState from "../store/flux";

export const VehicleCard = ({name}) => {
  return (
    <div className="card col-3 mx-1 bg-secondary shadow-lg">
      <img
        src="https://pm1.narvii.com/6177/088da41c754f2a4984a41684ae213f6531aaffa9_hq.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-info opacity-50">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
