const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: JSON.parse(localStorage.getItem("token")),
			random: [],
			cocktails: [],
			alcoholic: [],
			nonAlcoholic: [],
			favorites: [],
			filteredCocktails: []
		},
		actions: {
			cocktailsInfo: () => {
				const cocktailsEndPoint = `${process.env.APIURL}/9973533/search.php?s=margarita`;
				fetch(cocktailsEndPoint)
					.then(response => response.json())
					.then(data => {
						setStore({
							cocktails: data.drinks
						});
					})
					.then(() => console.log(getStore().cocktails));
			},

			randomcocktailsInfo: () => {
				const randomEndPoint = `${process.env.APIURL}/9973533/randomselection.php`;
				fetch(randomEndPoint)
					.then(response => response.json())
					.then(data => {
						setStore({
							random: data.drinks
						});
					})
					.then(() => console.log(getStore().cocktails));
			},

			fetchalcoholicInfo: async () => {
				const store = getStore();
				try {
					let waitForAlcoholicCocktails = await fetch(`${process.env.APIURL}/9973533/filter.php?a=Alcoholic`);
					let jsonOfAlcoholicCocktails = await waitForAlcoholicCocktails.json();
					setStore({ alcoholic: jsonOfAlcoholicCocktails.drinks });
				} catch (error) {
					console.log(error);
				}
			},

			fetchnonalcoholicInfo: async () => {
				const store = getStore();
				try {
					let waitForNonAlcoholicCocktails = await fetch(
						`${process.env.APIURL}/9973533/filter.php?a=Non_Alcoholic`
					);
					let jsonOfNonAlcoholicCocktails = await waitForNonAlcoholicCocktails.json();
					setStore({ nonAlcoholic: jsonOfNonAlcoholicCocktails.drinks });
				} catch (error) {
					console.log(error);
				}
			},

			searchCocktailsInfo: searchParam => {
				const cocktailStore = getStore().cocktails;
				console.log(cocktailStore);
				const filtered = cocktailStore.filter(cocktail =>
					cocktail.strDrink.toLowerCase().includes(searchParam.toLowerCase())
				);
				setStore({ filteredCocktails: filtered });
				console.log(filtered);
			},

			favoritesInfo: item => {
				let myFavorites = getStore().favorites;
				let selected = myFavorites.find(element => element === item);
				if (selected) {
					myFavorites = myFavorites.filter(element => item !== element);
					setStore({ favorites: myFavorites });
				} else {
					myFavorites = [...myFavorites, item];
					setStore({ favorites: myFavorites });
				}
			},

			login: async (email, password) => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}/login`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email, password })
					});
					if (res.ok) {
						const token = await res.json();

						localStorage.setItem("token", JSON.stringify(token));
						console.log("The response is ok", res);
						return true;
					} else {
						throw "Something went wrong";
					}
				} catch (error) {
					throw Error("Wrong email or password");
				}
			},
			signup: async (email, password, first_name, last_name) => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}/signup`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email, password, first_name, last_name })
					});
					if (res.ok) {
						const token = await res.json();

						localStorage.setItem("token", JSON.stringify(token));
						console.log("The response is ok", res);
						return true;
					} else {
						throw "Something went wrong";
					}
				} catch (error) {
					throw Error("Wrong email or password");
				}
			}
		}
	};
};

export default getState;
