import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Iphone from "../../img/on-the-go.jpeg";
import Over10 from "../../img/over10.jpeg";
import Share from "../../img/share-with-friends.jpeg";
import "../../styles/cards.scss";

export const Carta = () => {
	return (
		<Card className="cartas">
			<Image className="cartasImage" variant="top" src={Iphone} />
			<Card.Body className="cartasBody">
				<Card.Title className="title">
					<strong>Cocktail Recipes On The Go</strong>
				</Card.Title>
				<Card.Text className="body">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export const Carta2 = () => {
	return (
		<Card className="cartas">
			<Image className="cartasImage" variant="top" src={Over10} />
			<Card.Body className="cartasBody">
				<Card.Title className="title">
					<strong>Over 10+ Recipes Library</strong>
				</Card.Title>
				<Card.Text className="body">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export const Carta3 = () => {
	return (
		<Card className="cartas">
			<Image className="cartasImage" variant="top" src={Share} />
			<Card.Body className="cartasBody">
				<Card.Title className="title">
					<strong>Share With Family and Friends!</strong>
				</Card.Title>
				<Card.Text className="body">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
