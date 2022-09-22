import React, { Component } from "react";

export const Card = () => {
  return (
    
      <div className="card col-3 mx-1">
        <img
          src="https://www.alohacriticon.com/wp-content/uploads/2017/08/obi-wan-kenobi-pelicula-foto.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
  );
};
