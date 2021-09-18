import React, { useContext, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Iphone from "../../img/on-the-go.jpeg";
import Over10 from "../../img/over10.jpeg";
import Share from "../../img/share-with-friends.jpeg";
import Lucho from "../../img/luis.jpg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../../styles/cards.scss";

export const Cocktails = () => {
	return (
		// <Card className="cartas">
		// 	<Image className="cartasImage" variant="top" src={Over10} />
		// 	<Card.Body className="cartasBody">
		// 		<Card.Title className="title">Library Contains Over 10+ Recipes </Card.Title>
		// 		<Card.Text className="body">
		// 			Our exclusive library contains a variety of fun recipes that everyone will absolutely love!
		// 		</Card.Text>
		// 	</Card.Body>
		// </Card>

		<Row className="cartasmiddlecontainer">
			<Col sm={6} className="cartasMiddle">
				<h1 className="title">Over 10+ Recipes</h1>
				<p className="cartasBody">
					Our exclusive library contains a variety of fun recipes that everyone will absolutely love!
				</p>
			</Col>
			<Col sm={6}>
				<Image className="cartasImageMiddle pl-0" src={Over10} />
			</Col>
		</Row>
	);
};
