import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/jumbotron.css";

export const Banner = () => {
	return (
		<Jumbotron className="drink">
			<Container>
				<h1 className="jumboTitle">Introducing a New Way to Access your Favorite Cocktail Recipes.</h1>
			</Container>
		</Jumbotron>
	);
};
