import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Lucho from "../../img/luis.jpg";
import "../../styles/cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
