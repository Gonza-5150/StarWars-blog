import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Card } from "../component/card";

export const Character = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();
	return (
        <div>
            <Card/>
        </div>
	);
};
