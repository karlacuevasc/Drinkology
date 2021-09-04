import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Logo from "../../img/logo.png";

import "../../styles/navbar.scss";

export const NavBar = () => {
	return (
		<Navbar bg="light" sticky="top" variant="light">
			<Container>
				<Navbar.Brand href="#home">
					<Link to="/">
						<span className="navbar-brand mb-0 h1" href="#">
							<i className="pl-3 fas fa-glass-martini-alt fa-2x logo-color" />
						</span>
					</Link>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">
						<Link to="/" className="nav-link item-color" aria-current="page" href="#">
							Home
						</Link>
					</Nav.Link>
					<Nav.Link href="#login">
						<Link to="/login" className="nav-link item-color" href="#">
							Log In
						</Link>
					</Nav.Link>
					<Nav.Link href="#signup">
						<Link to="/signup" className="nav-link item-color" href="#">
							Sign Up
						</Link>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
