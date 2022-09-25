import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { PlanetCard } from "../component/planetCard";

export const Planets = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();
	return (
        <div>
            <PlanetCard/>
        </div>
	);
};