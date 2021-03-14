import React, { useContext } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { PlanetCard } from "../component/card";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			{store.planets.map((item, index) => {
				return (
					<PlanetCard
						key={index}
						name={item.name}
						terrain={item.terrain}
						population={item.population}
						climate={item.climate}
						id={index}
					/>
				);
			})}
		</div>
	);
};
