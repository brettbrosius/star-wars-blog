const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			favorites: []
		},
		actions: {
			loadPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => setStore({ people: data.results }));
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }));
			},
			addToFavoritesPeople: (item, index) => {
				let favoriteList = getStore().favorites;
				let person = getStore().people[index];
				person.type = "people";
				setStore({ favorites: [...favoriteList, person] });
			},
			addToFavoritesPlanets: (item, index) => {
				let favoriteList = getStore().favorites;
				let planet = getStore().planets[index];
				planet.type = "planets";
				setStore({ favorites: [...favoriteList, planet] });
			},
			removeFavorite: index => {
				let favoriteList = getStore().favorites;
				let filteredArray = favoriteList.filter((f, i) => i !== index);
				setStore({ favorites: filteredArray });
			}
		}
	};
};

export default getState;
