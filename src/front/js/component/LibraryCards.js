import React, { Component, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/librarycards.css";

export const Drink = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col className="asere">
			<Card style={{ width: "35rem", border: "none" }}>
				<Card.Img variant="top" src={props.strDrinkThumb} />
				<Card.Body className="overlay">
					<Card.Title>
						<h1>{props.strDrink}</h1>
					</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	);
};

Drink.propTypes = {
	strDrink: PropTypes.string,
	strDrinkThumb: PropTypes.string,
	idDrink: PropTypes.string,
	i: PropTypes.string
};
