import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
						let url = item.url.charAt(28) - 1;
						return (
							<Dropdown.Item key={index}>
								<Link to={`/people/${url}`}>{item.name}</Link>
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

/*Need to figure out how to make the favorites items link to the proper single
page. this solution works until obi wan because his url is /10/, which i cant
subtract one from, it returns 0 and luke skywalker

Also need to figure out functionality for both people and planets, everything involving favorites and single views works well with people but only halfway with planets

Other than that all the requirements are done, can also attempt the extra point stuff but I want to get this other shit figured out first*/
