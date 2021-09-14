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
				<Card.Title className="title">Cocktail Recipes On The Go</Card.Title>
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
				<Card.Title className="title">Over 10+ Recipe Library</Card.Title>
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
				<Card.Title className="title">Share With Family and Friends!</Card.Title>
				<Card.Text className="body">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
