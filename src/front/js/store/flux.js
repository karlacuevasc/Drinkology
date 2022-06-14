const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: JSON.parse(localStorage.getItem("token")) || [],
			random: [],
			myCocktails: [],
			cocktails: [],
			alcoholic: [],
			nonAlcoholic: [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			filteredCocktails: [],
			activeUser: localStorage.getItem("activeUser")
		},
		actions: {
			getMyCocktailsInfo: async () => {
				await fetch(`${process.env.BACKEND_URL}/cocktails`)
					.then(response => response.json())
					.then(data => {
						setStore({
							myCocktails: data
						});
					})
					.then(() => console.log(getStore().myCocktails));
			},
			getSingleCocktail: async id => {
				try {
					let waitForCocktailsDescription = await fetch(`${process.env.BACKEND_URL}/cocktail/${id}`);
					let cocktail = await waitForCocktailsDescription.json();
					return cocktail;
				} catch (error) {
					console.log(error);
					throw new Error(error.message);
				}
			},

			allCocktailsDescription: async () => {
				try {
					let waitForCocktailsDescription = await fetch(
						`${process.env.APIURL}/${process.env.APIKEY}/filter.php?c=Cocktail`
					);
					let jsonOfCocktailsDescription = await waitForCocktailsDescription.json();
					setStore({ cocktails: jsonOfCocktailsDescription.drinks });
				} catch (error) {
					console.log(error);
				}
			},
			randomcocktailsInfo: async () => {
				const randomEndPoint = await `${process.env.APIURL}/${process.env.APIKEY}/randomselection.php`;
				fetch(randomEndPoint)
					.then(response => response.json())
					.then(data => {
						setStore({
							random: data.drinks
						});
					});
			},
			fetchalcoholicInfo: async () => {
				try {
					let waitForAlcoholicCocktails = await fetch(
						`${process.env.APIURL}/${process.env.APIKEY}/filter.php?a=Alcoholic`
					);
					let jsonOfAlcoholicCocktails = await waitForAlcoholicCocktails.json();
					setStore({ cocktails: jsonOfAlcoholicCocktails.drinks });
				} catch (error) {
					console.log(error);
				}
			},

			fetchnonalcoholicInfo: async () => {
				try {
					let waitForNonAlcoholicCocktails = await fetch(
						`${process.env.APIURL}/${process.env.APIKEY}/filter.php?a=Non_Alcoholic`
					);
					let jsonOfNonAlcoholicCocktails = await waitForNonAlcoholicCocktails.json();
					setStore({ nonAlcoholic: jsonOfNonAlcoholicCocktails.drinks });
				} catch (error) {
					console.log(error);
				}
			},

			searchCocktailsInfo: searchParam => {
				const cocktailStore = getStore().cocktails;
				const filteredName = cocktailStore.filter(cocktail =>
					cocktail.strDrink.toLowerCase().includes(searchParam.toLowerCase())
				);
				setStore({ filteredCocktails: filteredName });
			},

			clearFilteredCocktails: searchParam => {
				let filteredCocktailStore = getStore().filteredCocktails;
				let clearArray = (filteredCocktailStore = []);
				setStore({ filteredCocktails: clearArray });
			},

			getCocktailByID: async cocktailID => {
				const cocktailsEndPoint = `${process.env.APIURL}/${process.env.APIKEY}/lookup.php?i=${cocktailID}`;
				const response = await fetch(cocktailsEndPoint);
				const data = await response.json();
				setStore({ cocktails: data.drinks });
				return data.drinks.find(cocktail => true);
			},

			favoritesInfo: item => {
				let myFavorites = getStore().favorites;
				console.log("these are my favorites", myFavorites);
				let itemID = item;
				if (typeof item !== "string") {
					itemID = item.idDrink;
				}
				let selected = myFavorites.find(element => element.idDrink === itemID);
				console.log("these are my selected", selected);
				if (selected) {
					myFavorites = myFavorites.filter(element => itemID !== element.idDrink);
					localStorage.setItem("favorites", JSON.stringify(myFavorites));
				} else {
					const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
					console.log("these are my stored", storedFavorites);
					let newStoredFavorites = [];
					if (storedFavorites !== null) {
						newStoredFavorites = [...storedFavorites, item];
					} else {
						newStoredFavorites = [item];
					}
					// myFavorites = newStoredFavorites;
					setStore({ favorites: newStoredFavorites });
					localStorage.setItem("favorites", JSON.stringify(getStore().favorites));
				}
			},

			getActiveUser: async email => {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}/user/active`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email })
					});
					const activeUser = await res.json();
					setStore({ activeUser: activeUser.first_name });
					localStorage.setItem("activeUser", activeUser.first_name);
				} catch (error) {
					throw Error("Wrong email or password");
				}
			},

			login: async (email, password, history) => {
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
						getActions().getActiveUser(email);
						history.push("/profile");

						return true;
					} else {
						throw "Something went wrong";
					}
				} catch (error) {
					throw Error("Wrong email or password");
				}
			},

			ageCheck: date => {
				let currentDate = new Date();
				let currentYear = currentDate.getFullYear();
				let userDate = new Date(date);
				let userYear = userDate.getFullYear();
				let yearDiff = currentYear - userYear;
				if (yearDiff < 21) {
					console.log("You must be 21+ to sign up");
					return false;
				} else {
					console.log("");
					return true;
				}
			},

			signup: async (email, password, first_name, last_name, date, setMessageState) => {
				console.log("I am the signup function");
				if (!getActions().ageCheck(date)) {
					setMessageState({ isActive: true, message: "You must be 21+ to sign up" });
					return;
				}

				console.log(first_name);

				try {
					const res = await fetch(`${process.env.BACKEND_URL}/user`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ email, password, first_name, last_name, date })
					});
					if (res.ok) {
						const token = await res.json();

						// localStorage.setItem("first_name", JSON.stringify(first_name));
						localStorage.setItem("token", JSON.stringify(token));
						console.log("The response is ok", res);
						getActions().getActiveUser(email);

						return true;
					} else {
						throw "Something went wrong";
					}
				} catch (error) {
					throw Error("Something went wrong");
				}
			},

			newCocktailForm: async (
				name,
				image,
				alcohol_content,
				glassware,
				garnish,
				first_step,
				second_step,
				third_step,
				fourth_step,
				fifth_step,
				first_ingredient,
				second_ingredient,
				third_ingredient,
				fourth_ingredient,
				fifth_ingredient,
				first_measurement,
				second_measurement,
				third_measurement,
				fourth_measurement,
				fifth_measurement,
				history
			) => {
				try {
					if (!name || name === "") throw new Error("Missing Name");
					if (!image || image === "") throw new Error("Missing Image");
					if (!alcohol_content || alcohol_content === "") throw new Error("Missing Alcohol Content");
					if (!glassware || glassware === "") throw new Error("Missing Glassware");
					if (!garnish || garnish === "") throw new Error("Missing Garnish");
					if (!first_ingredient || first_ingredient === "")
						throw new Error("You Need at Least One Ingredient");
					if (!first_measurement || first_measurement === "")
						throw new Error("You Need at Least One Measurement");
					if (!first_step || first_step === "") throw new Error("You Need at Least One Step");

					const res = await fetch(`${process.env.BACKEND_URL}/cocktail`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							name,
							image,
							alcohol_content,
							glassware,
							garnish,
							first_step,
							second_step,
							third_step,
							fourth_step,
							fifth_step,
							first_ingredient,
							second_ingredient,
							third_ingredient,
							fourth_ingredient,
							fifth_ingredient,
							first_measurement,
							second_measurement,
							third_measurement,
							fourth_measurement,
							fifth_measurement
						})
					});
					if (res.ok) {
						const token = await res.json();

						localStorage.setItem("token", JSON.stringify(token));
						console.log("The response is ok", res);
						history.push("/profile");

						return true;
					} else {
						throw "Something went wrong";
					}
				} catch (error) {
					throw Error(error.message);
				}
			}
		}
	};
};

export default getState;
