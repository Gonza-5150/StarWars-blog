import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Card } from "../component/card";

export const Character = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.eachCharacter(params.theid);
  }, []);

  console.log(store.characterEach)

  return (
    <div class="d-flex justify-content-center bg-dark">
      <div className="card col-4 mx-1 border-warning bg-secondary shadow-lg">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{store.characterEach?.name}</h5>
          <p className="card-text">
            <ul>
                <li>Genero: {store.characterEach?.gender}</li>
                <li>Color de piel: {store.characterEach?.skin_color}</li>
                <li>Nacimiento: {store.characterEach?.birth_year}</li>
                <li>Color de ojos: {store.characterEach?.eye_color}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
