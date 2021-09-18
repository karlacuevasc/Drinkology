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
			<div className="contactFormBackground">
				<div className="questions">
					<p className="questionTitle">Got a question? </p>
					<p>We would love to hear from you! Send us a message and we will respond as soon as possible.</p>
				</div>
				<div className="fields">
					<Form>
						<Row>
							<Col sm={4}>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Control type="email" placeholder="First name" />
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Control type="email" placeholder="Last name" />
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Control type="email" placeholder="email" />
								</Form.Group>
							</Col>
						</Row>
					</Form>
					<Form>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
									<Form.Control as="textarea" rows={10} placeholder="Message" />
								</Form.Group>
							</Col>
						</Row>
					</Form>
					<Button className="contactButton" variant="dark">
						Send
					</Button>
				</div>
			</div>
		</>
	);
};
