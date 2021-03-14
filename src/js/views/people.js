import React, { useContext } from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { PeopleCard } from "../component/card";
import { Context } from "../store/appContext";

export const People = () => {
	const { store, actions } = useContext(Context);
	return (
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
	);
};
