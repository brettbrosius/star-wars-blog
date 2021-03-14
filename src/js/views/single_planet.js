import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			{store.planets[params.id] && (
				<>
					<h1 className="display-4 my-5">{store.planets[params.id].name}</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum, dui a porta auctor,
						nisl nunc tempus libero, in fermentum nisl nulla nec massa. Nam molestie et odio at euismod. In
						a tellus a sem placerat consequat. Phasellus suscipit interdum diam vitae bibendum. Curabitur
						sit amet posuere metus. Aliquam eget mauris lorem. Vivamus eleifend ornare nibh. Phasellus at
						elit scelerisque, lacinia purus nec, euismod nisl.
					</p>
					<hr className="my-5" />
					<ul className="my-5">
						<li>Terrain: {store.planets[params.id].terrain}</li>
						<li>Population: {store.planets[params.id].population}</li>
						<li>Climate: {store.planets[params.id].climate}</li>
						<li>Rotation Period: {store.planets[params.id].rotation_period}</li>
						<li>Orbital Period: {store.planets[params.id].orbital_period} </li>
					</ul>

					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</>
			)}
			{!store.planets[params.id] && <h4>Loading...</h4>}
		</div>
	);
};
