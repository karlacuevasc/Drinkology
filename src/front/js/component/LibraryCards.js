import React, { Component, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Drink = props => {
	const { store, actions } = useContext(Context);
	console.log(store.cocktails);

	return (
		<Col>
			<Card style={{ width: "35rem" }}>
				<Card.Img variant="top" src={props.strDrinkThumb} />
				<Card.Body>
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
	i: PropTypes.string
};
