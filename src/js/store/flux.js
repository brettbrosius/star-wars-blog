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
			addToFavorites: (item, index) => {
				let favoriteList = getStore().favorites;
				let person = getStore().people[index];
				// let planet = getStore().planets[index]
				setStore({ favorites: [...favoriteList, person] });
			}
		}
	};
};

export default getState;
