import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/profilecard.scss";
import "../../styles/search.scss";

export const Search = () => {
	return (
		<Card.Body className="cartaBody">
			<Form className="cartaForm d-flex">
				<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
				<Button className="searchbutton">Search</Button>
			</Form>
		</Card.Body>
	);
};
