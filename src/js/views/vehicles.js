import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { VehicleCard } from "../component/vehicleCard";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();
	return (
        <div>
            <VehicleCard/>
        </div>
	);
};