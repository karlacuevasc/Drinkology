import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../../styles/welcome.scss";

export const Welcome = () => {
	return (
		<div className="black-rectangle">
			<Row>
				<Col>
					<h1 className="textWhite">A Brand New Way To Access Your Favorite Cocktail Recipes.</h1>
				</Col>
			</Row>
		</div>
	);
};