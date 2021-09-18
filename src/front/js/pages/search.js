import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Iphone from "../../img/on-the-go.jpeg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../../styles/profilecard.scss";

export const Search = () => {
	return (
		<Container>
			<div className="searchCarta" style={{ width: "55rem", height: "70rem" }}>
				<Card.Body>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
						<Button className="searchbutton">Search</Button>
					</Form>
				</Card.Body>
			</div>
		</Container>
	);
};
