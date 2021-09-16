import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Iphone from "../../img/on-the-go.jpeg";
import Over10 from "../../img/over10.jpeg";
import Share from "../../img/share-with-friends.jpeg";
import Lucho from "../../img/luis.jpg";
import "../../styles/cards.scss";

export const Carta = () => {
	return (
		<Card className="cartas">
			<Image className="cartasImage" variant="top" src={Iphone} />
			<Card.Body className="cartasBody">
				<Card.Title className="title">Cocktail Recipes On The Go</Card.Title>
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
				<Card.Title className="title">Library Contains Over 10+ Recipes </Card.Title>
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
				<Card.Title className="title">Share With Family and Friends</Card.Title>
				<Card.Text className="body">
					Impress your friends and family at parties by sharing your delicious cocktail ideas.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export const Karla = () => {
	return (
		<Card className="cartas">
			<Image className="cartasImage" variant="top" />
			<Card.Body className="cartasBody">
				<Card.Title className="title">Karla Cuevas</Card.Title>
				<Card.Text className="body">
					Impress your friends and family at parties by sharing your delicious cocktail ideas.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export const Luis = () => {
	return (
		<Card className="cartas">
			<Image className="cartasImage" variant="top" src={Lucho} style={{ width: "500px" }} />
			<Card.Body className="cartasBody">
				<Card.Title className="title">Luis Furlan</Card.Title>
				<Card.Text className="body">
					Impress your friends and family at parties by sharing your delicious cocktail ideas.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
