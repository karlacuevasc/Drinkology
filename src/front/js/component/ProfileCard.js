import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Iphone from "../../img/on-the-go.jpeg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../../styles/profilecard.scss";

export const ProfileCarta = () => {
	return (
		<Card className="profileCarta" style={{ width: "55rem" }}>
			<Card.Img
				className="profileImage"
				variant="top"
				src="https://amandascookin.com/wp-content/uploads/2019/05/moscow-mule-680.jpg"
			/>
			<Card.Body>
				<Card.Title>Moscow Mule</Card.Title>
				<Button variant="primary">About</Button>
			</Card.Body>
		</Card>
	);
};
