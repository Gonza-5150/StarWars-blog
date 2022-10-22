import "../../styles/home.css";
import { Card } from "../component/card";
import { PlanetCard } from "../component/planetCard";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { VehicleCard } from "../component/vehicleCard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);
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
    <div className="bg-dark shadow">
      <div>
        <h1 className="text-secondary">Personajes</h1>
        <div className="d-flex overflow-scroll">
          { store.characters.map((element, index)=>{
            return (
              <Card key={index} name={element.name} uid={element.id}/>
            )
          })}
        </div>
      </div>
      <div className="mt- shadow">
        <h1 className="text-secondary">Planetas</h1>
        <div className="d-flex overflow-scroll">
        { store.planets.map((element, index)=>{
            return (
              <PlanetCard key={index} name={element.name} url={element.url} uid={element.id} />
            )
          })}
        </div>
      </div>
      <div className="shadow">
        <h1 className="text-secondary">Vehiculos</h1>
        <div className="d-flex overflow-scroll">
        { store.vehicles.map((element, index)=>{
            return (
              <VehicleCard key={index} name={element.name} uid={element.id} />
            )
          })}
        </div>
      </div>
    </div>
  );
};
