import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Tab } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Search } from "../component/search";
import { ProfileCarta } from "../component/ProfileCards";
import { ProfileNavbar } from "../component/ProfileNav";
import { Drink } from "../component/LibraryCards";

export const Account = () => {
	const { store } = useContext(Context);
	return (
		<div className="">
			<ProfileNavbar />
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="pillstyle mb-3 pt-5">
				<Tab eventKey="home" title="Favorites" className="recipespill" />
				{store.favorites.length > 0 ? (
					store.favorites.map((favorite, i) => (
						<ProfileCarta
							key={i}
							strDrink={cocktail.strDrink}
							strDrinkThumb={cocktail.strDrinkThumb}
							idDrink={cocktail.idDrink}
						/>
					))
				) : (
					<h1>There Are No Favorites</h1>
				)}
				<Tab eventKey="profile" title="Search" className="searchPill">
					<Search />
					<div className="scroll">
						{store.filteredCocktails.map((cocktail, ingredient, i) => {
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
							<Row>
								<Col>
									<h1 className="text-center p-5" style={{ fontSize: "4rem" }}>
										Alcoholic
									</h1>
								</Col>
							</Row>

							<div className="scroll pb-5">
								{store.alcoholic.map((alcoholic, i) => {
									return (
										<ProfileCarta
											key={i}
											strDrink={alcoholic.strDrink}
											strDrinkThumb={alcoholic.strDrinkThumb}
											idDrink={alcoholic.idDrink}
										/>
									);
								})}
							</div>

							<Row>
								<Col>
									<h1 className="text-center p-5" style={{ fontSize: "4rem" }}>
										Non-Alcoholic
									</h1>
								</Col>
							</Row>

							<div className="scroll">
								{store.nonAlcoholic.map((nonAlcoholic, i) => {
									return (
										<ProfileCarta
											key={i}
											strDrink={nonAlcoholic.strDrink}
											strDrinkThumb={nonAlcoholic.strDrinkThumb}
											idDrink={nonAlcoholic.idDrink}
										/>
									);
								})}
							</div>
						</>
					)}
				</Tab>
				<Tab eventKey="create" title="Create your own" className="recipespill" />
			</Tabs>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};
