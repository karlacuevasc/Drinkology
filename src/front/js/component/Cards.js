import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Iphone from "../../img/on-the-go.jpeg";
import Over10 from "../../img/over10.jpeg";
import Share from "../../img/share-with-friends.jpeg";
import Lucho from "../../img/luis.jpg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../../styles/cards.scss";

export const Carta = () => {
	return (
		// <Card className="cartas">
		// 	<Image className="cartasImage" variant="top" src={Iphone} />
		// 	<Card.Body className="cartasBody">
		// 		<Card.Title className="title">Cocktail Recipes On The Go</Card.Title>
		// 		<Card.Text className="body">
		// 			Our easy to use website allows you to save and search your favorite cocktail recipes wherever you
		// 			are.
		// 		</Card.Text>
		// 	</Card.Body>
		// </Card>

		<Row className="cartasimagepadding">
			<Col sm={6}>
				<Image className="cartasImage" src={Iphone} />
			</Col>
			<Col sm={6} className="cartas">
				<h1 className="title">Cocktail Recipes On The Go</h1>
				<p className="cartasBody">
					Our easy to use website allows you to save and search your favorite cocktail recipes wherever you
					are.
				</p>
			</Col>
		</Row>
	);
};

export const Carta2 = () => {
	return (
		// <Card className="cartas">
		// 	<Image className="cartasImage" variant="top" src={Over10} />
		// 	<Card.Body className="cartasBody">
		// 		<Card.Title className="title">Library Contains Over 10+ Recipes </Card.Title>
		// 		<Card.Text className="body">
		// 			Our exclusive library contains a variety of fun recipes that everyone will absolutely love!
		// 		</Card.Text>
		// 	</Card.Body>
		// </Card>

		<Row className="cartasmiddlecontainer">
			<Col sm={6} className="cartasMiddle">
				<h1 className="title">Over 10+ Recipes</h1>
				<p className="cartasBody">
					Our exclusive library contains a variety of fun recipes that everyone will absolutely love!
				</p>
			</Col>
			<Col sm={6}>
				<Image className="cartasImageMiddle pl-0" src={Over10} />
			</Col>
		</Row>
	);
};

export const Carta3 = () => {
	return (
		// <Card className="cartas">
		// 	<Image className="cartasImage" variant="top" src={Share} />
		// 	<Card.Body className="cartasBody">
		// 		<Card.Title className="title">Share With Family and Friends</Card.Title>
		// 		<Card.Text className="body">
		// 			Impress your friends and family at parties by sharing your delicious cocktail ideas.
		// 		</Card.Text>
		// 	</Card.Body>
		// </Card>

		<Row className="cartasbottomcontainer">
			<Col sm={6}>
				<Image className="cartasImage" src={Share} />
			</Col>
			<Col sm={6} className="cartas">
				<h1 className="title">Share With Family and Friends</h1>
				<p className="cartasBody">
					Impress your friends and family at parties by sharing your delicious cocktail ideas.
				</p>
			</Col>
		</Row>
	);
};

export const Karla = () => {
	return (
		<Card className="cartasTeam">
			<Image className="cartasImageKarla" variant="top" />
			<Card.Body className="cartasBodyTeam">
				<Card.Title className="titleTeam">Karla Cuevas</Card.Title>
			</Card.Body>
		</Card>
	);
};

export const Luis = () => {
	return (
		<Card className="cartasTeam">
			<Image className="cartasImageLuis" variant="top" src={Lucho} style={{ width: "500px" }} />
			<Card.Body className="cartasBodyTeam">
				<Card.Title className="titleTeam">Luis Furlan</Card.Title>
			</Card.Body>
		</Card>
	);
};
