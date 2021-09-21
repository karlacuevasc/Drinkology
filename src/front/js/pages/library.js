import React, { useContext, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import { Drink } from "../component/LibraryCards";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import { CocktailsRecipeCard } from "./cocktails";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import Miami from "../../img/miami.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/library.scss";

export const Library = props => {
	const { store } = useContext(Context);
	return (
		<div>
			<Jumbotron className="libraryJumbo">
				<h1 className="cocktailbarTitle">Cocktail Bar</h1>
			</Jumbotron>
			<div className="scroll">
				{store.random.map((cocktail, i) => {
					return <Drink key={i} strDrink={cocktail.strDrink} strDrinkThumb={cocktail.strDrinkThumb} />;
				})}
			</div>

			<Row className="aboutus2">
				<Col sm={8} className="aboutuscontainer2" style={{ paddingBottom: "100px" }}>
					<h1 className="welcomeTitle" style={{ fontSize: "5rem", textAlign: "center" }}>
						But wait... there&#39;s more!
					</h1>
					<p className="aboutusBody" style={{ marginBottom: "40px", fontSize: "2rem", textAlign: "center" }}>
						Create an account to discover our exclusive library that contains more than 400 cocktail
						recipes. And yes you guessed it.. it&#39;s absolutely <strong>free</strong>.
					</p>
					<div style={{ textAlign: "center" }}>
						<Button className="cocktailbutton" href="/signup" size="lg" variant="dark">
							Discover More
						</Button>
					</div>
				</Col>
			</Row>
			<br />
			<br />
		</div>
	);
};
