import "../../styles/home.css";
import { Card } from "../component/card";
import { PlanetCard } from "../component/planetCard";
import { characterCard } from "../component/characterCard";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { VehicleCard } from "../component/vehicleCard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters);
  useEffect(() => {
    actions.fetchCharacters();
  }, []);
  console.log(store.planets);
  useEffect(() => {
    actions.fetchPlanets();
  }, []);
  console.log(store.vehicles);
  useEffect(() => {
    actions.fetchVehicles();
  }, []);
  return (
    <div className="bg-secondary ">
      <div>
        <h1>Personaje</h1>
        <div className="d-flex overflow-scroll">
          { store.characters.map((element)=>{
            return (
              <Card name={element.name} />
            )
          })}
        </div>
      </div>
      <div className="mt-">
        <h1>Planetas</h1>
        <div className="d-flex overflow-scroll">
        { store.planets.map((element, index)=>{
            return (
              <PlanetCard name={element.name} />
            )
          })}
        </div>
      </div>
      <div className="mt-">
        <h1>Vehiculos</h1>
        <div className="d-flex overflow-scroll">
        { store.vehicles.map((element, index)=>{
            return (
              <VehicleCard name={element.name} />
            )
          })}
        </div>
      </div>
    </div>
  );
};
