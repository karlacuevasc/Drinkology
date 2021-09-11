import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ScriptTag from "react-script-tag";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "../../styles/contact.scss";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Jumbotron className="contactImage" fluid>
				<div className="">
					<Container className="">
						<h1 className="contactTitle">Contact Us</h1>
					</Container>
				</div>
			</Jumbotron>

			<Row>
				<Col sm={4} />
				<Col sm={4}>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Control type="email" placeholder="First Name" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Control type="email" placeholder="Last Name" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Control type="email" placeholder="Email Address" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
							<Form.Control as="textarea" rows={3} placeholder="Message" />
						</Form.Group>
					</Form>
					<Button variant="dark">Dark</Button>
				</Col>
				<Col sm={4} />
			</Row>
		</>
	);
};
