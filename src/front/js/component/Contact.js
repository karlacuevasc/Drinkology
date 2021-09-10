import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ScriptTag from "react-script-tag";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../../styles/contact.scss";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="contact-sheet">
			<Container>
				{/* <Jumbotron className="contactImage" fluid>
					<div className="">
						<Container className="">
							<h1 className="">Contact Us</h1>
						</Container>
					</div>
				</Jumbotron> */}
				<Container>
					<h1 className="contactusTitle">Contact Us</h1>
				</Container>
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
					</Col>
					<Col sm={4} />
				</Row>
			</Container>
		</div>
	);
};
