import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Search } from "../component/search";
import { ProfileCarta } from "../component/ProfileCard";
import { ProfileNavbar } from "../component/ProfileNav";
import { Drink } from "../component/LibraryCards";

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
						{store.cocktails.map((cocktail, i) => {
							return (
								<Drink key={i} strDrink={cocktail.strDrink} strDrinkThumb={cocktail.strDrinkThumb} />
							);
						})}
					</div>
					<div className="scroll">
						{store.alcoholic.map((cocktail, i) => {
							return (
								<Drink key={i} strDrink={cocktail.strDrink} strDrinkThumb={cocktail.strDrinkThumb} />
							);
						})}
					</div>
					<div className="scroll">
						{store.nonAlcoholic.map((cocktail, i) => {
							return (
								<Drink key={i} strDrink={cocktail.strDrink} strDrinkThumb={cocktail.strDrinkThumb} />
							);
						})}
					</div>
				</Tab>
			</Tabs>
		</div>
	);
};
