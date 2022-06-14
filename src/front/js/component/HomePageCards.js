import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Iphone from "../../img/on-the-go.jpeg";
import Share from "../../img/share-with-friends.jpeg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../../styles/cards.css";

export const Carta = () => {
	return (
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

export const Carta3 = () => {
	return (
		<Row className="cartasbottomcontainer">
			<Col sm={6} className="cartas">
				<h1 className="title">Share With Family and Friends</h1>
				<p className="cartasBody">
					Impress your friends and family at parties by sharing your delicious cocktail ideas.
				</p>
			</Col>
			<Col sm={6}>
				<Image className="cartasImage" src={Share} />
			</Col>
		</Row>
	);
};
