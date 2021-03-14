import React, { useContext } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { PeopleCard, PlanetCard } from "../component/card";

export const Favorites = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			{store.favorites.map((item, index) => {
				return (
					<PeopleCard
						key={index}
						name={item.name}
						gender={item.gender}
						birthyear={item.birth_year}
						id={index}
					/>
				);
			})}
		</div>
	);
};
