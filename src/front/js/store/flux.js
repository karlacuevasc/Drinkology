const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://3001-amber-damselfly-s3ylt9x5.ws-us15.gitpod.io/api",
			apiURL: "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
			alcURL: "www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka",
			nonalcURL: "www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
			token: JSON.parse(localStorage.getItem("token")),
			cocktails: [],
			alcoholic: [],
			nonAlcoholic: [],
			favorites: []
		},
		actions: {
			cocktailsInfo: () => {
				const cocktailsEndPoint = getStore().apiURL;
				fetch(cocktailsEndPoint)
					.then(response => response.json())
					.then(data => {
						setStore({
							cocktails: data
						});
					})
					.then(() => console.log(getStore().cocktails));
			},
			alcoholicInfo: () => {
				fetch(getStore().alcURL)
					.then(response => response.json())
					.then(data => {
						setStore({
							alcoholic: data
						});
					})
					.then(() => console.log(getStore().alcoholic));
			},
			// updateCocktails: async () => {
			// 	try {
			// 		const res = await fetch(`${getStore().baseURL}/cocktails`, {
			// 			method: "POST",
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 				Authorization: `Bearer ${getStore().token}`
			// 			},
			// 			body: JSON.stringify({
			// 				srtDrink,
			// 				strGlass,
			// 				strInstructions,
			// 				strDrinkThumb,
			// 				strIngredient1,
			// 				strIngredient2,
			// 				strIngredient3,
			// 				strIngredient4,
			// 				strMeasure1,
			// 				strMeasure2,
			// 				strMeasure3
			// 			})
			// 		});
			// 		if (res.ok) {
			// 			const token = await res.json();

			// 			localStorage.setItem("token", JSON.stringify(token));
			// 			history.push("/profile");
			// 		}
			// 	} catch (error) {
			// 		console.log(error);
			// 	}
			// },
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
