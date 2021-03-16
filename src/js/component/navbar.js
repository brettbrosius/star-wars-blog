import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const currentIndex = (name, type) => {
		let finalIndex = null;
		if (type === "people") {
			finalIndex = store.people.findIndex(i => i.name === name);
		} else {
			finalIndex = store.planets.findIndex(i => i.name === name);
		}
		return finalIndex;
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Blog</span>
			</Link>
			<Dropdown>
				<Dropdown.Toggle variant="primary" id="dropdown-basic">
					Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favorites.map((item, index) => {
						return (
							<Dropdown.Item key={index}>
								<Link to={`/${item.type}/${currentIndex(item.name, item.type)}`}>{item.name}</Link>
								<span onClick={() => actions.removeFavorite(index)}>
									<i className="far fa-trash-alt float-right" />
								</span>
							</Dropdown.Item>
						);
					})}
					<Dropdown.Item>
						<Link to="/favorites">Go to favorites</Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
