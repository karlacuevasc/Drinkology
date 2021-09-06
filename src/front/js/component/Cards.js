import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import "../../styles/cards.scss";

export const Carta = () => {
	return (
		<Card className="cartas" style={{ width: "30rem" }}>
			{/* <Card.Img
				variant="top"
				src="https://images.theconversation.com/files/194291/original/file-20171113-27595-ox08qm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
			/> */}
			<container className="m-auto">
				<Col xs={6} md={4}>
					<Image
						className="cocktails"
						src="https://images.theconversation.com/files/194291/original/file-20171113-27595-ox08qm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
						roundedCircle
					/>
				</Col>
			</container>
			<Card.Body>
				<Card.Title className="title">Personalized Drinks</Card.Title>
				<Card.Text className="body">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
