import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Logo from "../../img/logo.png";

import "../../styles/navbar.scss";

export const NavBar = () => {
	return (
		<Navbar variant="light" bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">
					<i className="fas fa-cocktail" />
				</Navbar.Brand>

				<Nav className="justify-content-center" activeKey="/home">
					<Nav.Item className="loginTab pr-3">
						<Nav.Link href="/login">Log In</Nav.Link>
					</Nav.Item>

					<Nav.Item className="signupTab pr-3">
						<Nav.Link href="/signup">Sign Up</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
	);
};

{
	/* <Nav.Item className="loginTab pr-3">
						<InputGroup className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-default">
								<i className="fas fa-search" />
							</InputGroup.Text>
							<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
						</InputGroup>
					</Nav.Item> */
}
