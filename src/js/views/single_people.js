import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePeople = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			{store.people[params.id] && (
				<>
					<h1 className="display-4 my-5">{store.people[params.id].name}</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum, dui a porta auctor,
						nisl nunc tempus libero, in fermentum nisl nulla nec massa. Nam molestie et odio at euismod. In
						a tellus a sem placerat consequat. Phasellus suscipit interdum diam vitae bibendum. Curabitur
						sit amet posuere metus. Aliquam eget mauris lorem. Vivamus eleifend ornare nibh. Phasellus at
						elit scelerisque, lacinia purus nec, euismod nisl.
					</p>
					<hr className="my-5" />
					<ul className="my-5">
						<li>Gender: {store.people[params.id].gender}</li>
						<li>Birth Year: {store.people[params.id].gender}</li>
						<li>Hair Color: {store.people[params.id].hair_color}</li>
						<li>Eye Color: {store.people[params.id].eye_color}</li>
						<li>Height: {store.people[params.id].height} cm</li>
					</ul>

					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</>
			)}
			{!store.people[params.id] && <h4>Loading...</h4>}
		</div>
	);
};
