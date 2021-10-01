import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Iphone from "../../img/on-the-go.jpeg";
import Over10 from "../../img/over10.jpeg";
import Share from "../../img/share-with-friends.jpeg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../../styles/cards.scss";
import PropTypes from "prop-types";

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

export const Carta2 = () => {
	return (
		<Row className="cartasmiddlecontainer">
			<Col sm={6} className="cartasMiddle">
				<h1 className="title">Unique Recipes</h1>
				<p className="cartasBody">Explore a library filled authentic recipes that will blow your mind.</p>
			</Col>
			<Col sm={6}>
				<Image className="cartasImageMiddle pl-0" src={Over10} />
			</Col>
		</Row>
	);
};

export const Carta3 = () => {
	return (
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

Carta.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string
};
Carta2.propTypes = {
	name: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string
};
Carta3.propTypes = {
	name: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string
};
