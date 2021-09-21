import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Search } from "./search";
import PropTypes from "prop-types";
import "../../styles/profilecard.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProfileCarta = () => {
	return (
		<Card className="profileCarta" style={{ width: "55rem", height: "70rem" }}>
			<Card.Img
				className="profileImage"
				variant="top"
				src="https://amandascookin.com/wp-content/uploads/2019/05/moscow-mule-680.jpg"
			/>
			<Card.Body>
				<h1 className="recipeBody">(Cocktail Title)</h1>
			</Card.Body>
		</Card>
	);
};

ProfileCarta.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string
};
