const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://3001-amber-damselfly-s3ylt9x5.ws-us15.gitpod.io/api",
			allURL: "",
			apiURL: "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php",
			alcURL: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
			nonalcURL: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
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
				const cocktailsEndPoint = getStore().apiURL;
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
				const randomEndPoint = getStore().apiURL;
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
					let waitForAlcoholicCocktails = await fetch(store.alcURL);
					let jsonOfAlcoholicCocktails = await waitForAlcoholicCocktails.json();
					setStore({ alcoholic: jsonOfAlcoholicCocktails.drinks });
				} catch (error) {
					console.log(error);
				}
			},

			fetchnonalcoholicInfo: async () => {
				const store = getStore();
				try {
					let waitForNonAlcoholicCocktails = await fetch(store.nonalcURL);
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

			login: async (email, password, history) => {
				try {
					const res = await fetch(`${getStore().baseURL}/login`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email, password })
					});
					if (res.ok) {
						const token = await res.json();

						localStorage.setItem("token", JSON.stringify(token));
						history.push("/profile");
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
