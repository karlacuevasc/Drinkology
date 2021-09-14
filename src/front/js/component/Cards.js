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
				<Card.Title className="title">Cocktail recipes on the go</Card.Title>
				<Card.Text className="body">
					Our easy to use website allows you to save and search your favorite cocktail recipes wherever you
					are.
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
				<Card.Title className="title">Library contains over 10+ recipes </Card.Title>
				<Card.Text className="body">
					Our exclusive library contains a variety of fun recipes that everyone will absolutely love!
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
				<Card.Title className="title">Share with family and friends</Card.Title>
				<Card.Text className="body">
					Impress your friends and family at parties by sharing your delicious cocktail ideas.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
