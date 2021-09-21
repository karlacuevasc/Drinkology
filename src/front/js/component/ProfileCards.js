import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/profilecard.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProfileCarta = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col className="asere">
			<Card style={{ width: "35rem", border: "none" }}>
				<Card.Img variant="top" src={props.strDrinkThumb} />
				<Card.Body className="overlay">
					<Card.Title>
						<h1>{props.strDrink}</h1>
					</Card.Title>
					<Link to={"/cocktails/" + props.idDrink}>
						<Button variant="outline-danger">Danger</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

ProfileCarta.propTypes = {
	strDrink: PropTypes.string,
	strDrinkThumb: PropTypes.string,
	idDrink: PropTypes.string
};
