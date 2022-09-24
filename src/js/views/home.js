import "../../styles/home.css";
import { Card } from "../component/card";
import { PlanetCard } from "../component/planetCard";
import { characterCard } from "../component/characterCard";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters);
  useEffect(() => {
    actions.fetchCharacters();
  }, []);
  return (
    <div className="bg-secondary ">
      <div>
        <h1>Personaje</h1>
        <div className="d-flex overflow-scroll">
          { store.characters.map((element, index)=>{
            return (
              <Card name={element.name} />
            )
          })}
        </div>
      </div>
      <div className="mt-">
        <h1>Planetas</h1>
        <div className="d-flex overflow-scroll">
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
          <PlanetCard />
        </div>
      </div>
    </div>
  );
};
