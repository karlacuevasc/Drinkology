import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Logo from "../../img/logo.png";

import "../../styles/navbar.scss";

export const NavBar = () => {
	return (
		<Navbar variant="light" bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">Drinkology</Navbar.Brand>
				<Nav className="justify-content-center" activeKey="/home">
					<Nav.Item>
						<Nav.Link href="/">
							<DropdownButton id="dropdown-basic-button" variant="none" title="Home" />
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="/login">
							<DropdownButton id="dropdown-basic-button" variant="none" title="Log In" />
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="/signup">
							<DropdownButton id="dropdown-basic-button" variant="none" title="Sign Up" />
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link href="/aboutus">
							<DropdownButton id="dropdown-basic-button" variant="none" title="About Us" />
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
	);
};
