import React, { Component } from "react";
import { useState, useEffect } from "react";
import getState from "../store/flux";


export const PlanetCard = ({name,url, uid}) => {
  return (
    
      <div className="card col-3 border-warning mx-1 bg-secondary shadow-lg opacity-60">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. {url}
            
          </p>
          <a href={`/planets/${uid}`} className="btn btn-info border-warning opacity-50">
            Mas información
          </a>
        </div>
      </div>
  );
};


 
