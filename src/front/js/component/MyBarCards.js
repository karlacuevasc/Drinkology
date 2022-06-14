import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/profilecard.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const BarCarta = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col className="asere">
			<Card style={{ width: "35rem", border: "none" }}>
				<Card.Img variant="top" src={props.image} />
				<Card.Body className="overlay">
					<Container>
						<Card.Title className="pb-3">
							<h1>{props.name}</h1>
						</Card.Title>

						<Button href={"/mycocktails/" + props.id} variant="dark">
							See Full Recipe
						</Button>
					</Container>
				</Card.Body>
			</Card>
		</Col>
	);
};

BarCarta.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	id: PropTypes.string,
	i: PropTypes.string,
	alcohol_content: PropTypes.string,
	glassware: PropTypes.string,
	garnish: PropTypes.string,
	first_step: PropTypes.string,
	second_step: PropTypes.string,
	third_step: PropTypes.string,
	fourth_step: PropTypes.string,
	fifth_step: PropTypes.string,
	first_ingredient: PropTypes.string,
	second_ingredient: PropTypes.string,
	third_ingredient: PropTypes.string,
	fourth_ingredient: PropTypes.string,
	fifth_ingredient: PropTypes.string,
	first_measurement: PropTypes.string,
	second_measurement: PropTypes.string,
	third_measurement: PropTypes.string,
	fourth_measurement: PropTypes.string,
	fifth_measurement: PropTypes.string
};
