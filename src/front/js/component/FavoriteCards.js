import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/profilecard.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const FavoriteCarta = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col className="asere">
			<Card style={{ width: "35rem", border: "none" }}>
				<Card.Img variant="top" src={props.strDrinkThumb} />
				<Card.Body className="overlay">
					<Container>
						<Card.Title className="pb-3">
							<h1>{props.strDrink}</h1>
						</Card.Title>

						<Button href={"/cocktails/" + props.idDrink} variant="dark">
							See Full Recipe
						</Button>
						<Button variant="danger" onClick={() => actions.favoritesInfo(props.idDrink)}>
							Remove <i className="fas fa-trash-alt" />
						</Button>
					</Container>
				</Card.Body>
			</Card>
		</Col>
	);
};

FavoriteCarta.propTypes = {
	strDrink: PropTypes.string,
	strDrinkThumb: PropTypes.string,
	idDrink: PropTypes.string
};
