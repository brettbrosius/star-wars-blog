import React, { useContext } from "react";
import "../../styles/home.scss";
import { PeopleCard, PlanetCard } from "../component/card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<Link to="/people">
				<h1>
					People <i className="fas fa-users" />
				</h1>
			</Link>
			<div className="text-center mt-5">
				{store.people.map((item, index) => {
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
			<Link to="/planets">
				<h1>
					Planets <i className="fas fa-globe-americas" />
				</h1>
			</Link>
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
		</div>
	);
};
