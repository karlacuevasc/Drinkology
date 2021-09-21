import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Search } from "../component/search";
import { ProfileCarta } from "../component/ProfileCards";
import { ProfileNavbar } from "../component/ProfileNav";

export const Account = () => {
	const { store } = useContext(Context);
	return (
		<div className="">
			<ProfileNavbar />
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="pillstyle mb-3 pt-5">
				<Tab eventKey="home" title="Favorites" className="recipespill" />
				<Tab eventKey="profile" title="Search" className="searchPill">
					<Search />
					<div className="scroll">
						{store.filteredCocktails.map((cocktail, i) => {
							return (
								<ProfileCarta
									key={i}
									strDrink={cocktail.strDrink}
									strDrinkThumb={cocktail.strDrinkThumb}
									idDrink={cocktail.idDrink}
								/>
							);
						})}
					</div>
					{store.filteredCocktails.length === 0 && (
						<>
							<div className="scroll">
								{store.cocktails.map((cocktail, i) => {
									return (
										<ProfileCarta
											key={i}
											strDrink={cocktail.strDrink}
											strDrinkThumb={cocktail.strDrinkThumb}
											idDrink={cocktail.idDrink}
										/>
									);
								})}
							</div>
							<h1>Alcoholic</h1>
							<div className="scroll">
								{store.alcoholic.map((cocktail, i) => {
									return (
										<ProfileCarta
											key={i}
											strDrink={cocktail.strDrink}
											strDrinkThumb={cocktail.strDrinkThumb}
											idDrink={cocktail.idDrink}
										/>
									);
								})}
							</div>
							<div className="scroll">
								{store.nonAlcoholic.map((cocktail, i) => {
									return (
										<ProfileCarta
											key={i}
											strDrink={cocktail.strDrink}
											strDrinkThumb={cocktail.strDrinkThumb}
											idDrink={cocktail.idDrink}
										/>
									);
								})}
							</div>
						</>
					)}
				</Tab>
			</Tabs>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};
