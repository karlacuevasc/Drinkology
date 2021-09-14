import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Alcohol from "../../img/alcohol.jpeg";
import { Image } from "react-bootstrap";
import "../../styles/welcome.scss";

export const Welcome = () => {
	return (
		<div className="black-rectangle">
			<Container>
				<Row>
					<Col />
					<Container>
						<Col>
							<h1 className="textWhite">
								Discover A Brand New Way To Access Your Favorite Cocktail Recipes.
							</h1>
						</Col>
					</Container>
					<Col />
				</Row>
			</Container>
		</div>

		// <Container className="containerB" fluid>
		// 	<div className="black-rectangle">
		// 		<div className="overlay">
		// 			<div className="textWhite">
		// 				<h1>A Brand New Way To Access Your Favorite Cocktail Recipes.</h1>
		// 			</div>
		// 		</div>
		// 	</div>
		// </Container>
	);
};
