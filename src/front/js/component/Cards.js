import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Carta = () => {
	return (
		<Card style={{ width: "30rem" }}>
			<Card.Img
				variant="top"
				src="https://images.theconversation.com/files/194291/original/file-20171113-27595-ox08qm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
			/>
			<Card.Body>
				<Card.Title>Personalized Drinks</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<Button variant="danger">More Info</Button>
			</Card.Body>
		</Card>
	);
};
