import React, { Component } from "react";
import { useState, useEffect } from "react";
import getState from "../store/flux";


export const PlanetCard = ({name}) => {
  return (
    
      <div className="card col-3 mx-1 bg-secondary shadow-lg opacity-60">
        <img
          src="https://i.pinimg.com/originals/8b/14/f4/8b14f468c30d9461cdfb549b6e7839d3.jpg"
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

 
