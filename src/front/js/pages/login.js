import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="cartica vh-100">
			<Nav className="justify-content-center" defaultActiveKey="/login" as="ul">
				<Nav.Item as="li">
					<Nav.Link variant="dark" href="/login">
						Log In
					</Nav.Link>
				</Nav.Item>
				<Nav.Item as="li">
					<Nav.Link href="/signup">Sign Up</Nav.Link>
				</Nav.Item>
			</Nav>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Remember Password" />
				</Form.Group>
				<Button variant="dark" type="submit">
					Login
				</Button>
			</Form>
		</div>
	);
};
