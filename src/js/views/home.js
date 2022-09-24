import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { PlanetCard } from "../component/planetCard";
import { SingleCard } from "../component/singleCard";

export const Home = () => {
  return (
    <div className="bg-secondary ">
      <div>
        <h1>Personaje</h1>
        <div className="d-flex overflow-scroll">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
		<div>
			<SingleCard />
		</div>
      </div>
    </div>
  );
};
