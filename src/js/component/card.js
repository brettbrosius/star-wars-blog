import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState from "../store/flux";

export const PeopleCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-inline-flex text-center my-2 mx-2">
			<div className="card" style={{ width: "18rem" }}>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">Gender: {props.gender}</p>{" "}
					<p className="card-text">Birth Year: {props.birthyear}</p>
					<Link to={`/people/${props.id}`}>
						<button className="float-left btn btn-outline-primary">Learn More</button>
					</Link>
					<button
						onClick={() => {
							actions.addToFavoritesPeople(props.name, props.id);
						}}
						className="float-right btn btn-outline-warning">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="d-inline-flex text-center my-2 mx-2">
			<div className="card" style={{ width: "18rem" }}>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">Population: {props.population}</p>{" "}
					<p className="card-text">Climate: {props.climate}</p>
					<p className="card-text">Terrain: {props.terrain}</p>{" "}
					<Link to={`/planets/${props.id}`}>
						<button className="float-left btn btn-outline-primary">Learn More</button>
					</Link>
					<button
						onClick={() => {
							actions.addToFavoritesPlanets(props.name, props.id);
						}}
						className="float-right btn btn-outline-warning">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

PeopleCard.propTypes = {
	name: PropTypes.string,
	birthyear: PropTypes.string,
	gender: PropTypes.string,
	id: PropTypes.number
};
PlanetCard.propTypes = {
	name: PropTypes.string,
	terrain: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	id: PropTypes.number
};
