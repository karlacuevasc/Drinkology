import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Drink = () => {
	return (
		<Card style={{ width: "45rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
			</Card.Body>
		</Card>
	);
};
