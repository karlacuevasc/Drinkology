import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Tab } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Search } from "../component/search";
import { ProfileCarta } from "../component/ProfileCards";
import { ProfileNavbar } from "../component/ProfileNav";
import { FavoriteCarta } from "../component/FavoriteCards";
import { Drink } from "../component/LibraryCards";
import "../../styles/profilecard.scss";

export const Account = () => {
	const { store } = useContext(Context);
	return (
		<div className="">
			<ProfileNavbar />
			<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="pillstyle mb-3 pt-5">
				<Tab eventKey="favorite" title="Favorites" className="recipespill">
					<div className="scroll">
						{store.favorites.map((favorite, i) => {
							return (
								<FavoriteCarta
									key={i}
									strDrink={favorite.strDrink}
									strDrinkThumb={favorite.strDrinkThumb}
									idDrink={favorite.idDrink}
								/>
							);
						})}
					</div>
				</Tab>
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
			</Tabs>
			<br />
			<br />
			<br />
			<br />
		</div>
	);
};
