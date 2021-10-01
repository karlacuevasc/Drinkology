import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SignOut } from "./signout";
import "../../styles/navbar.scss";

export const NavBar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const handleLogOut = () => {
		localStorage.clear();
		history.push("/");
		location.reload();
	};

	return (
		<Navbar variant="light" bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">
					<i className="fas fa-cocktail" />
				</Navbar.Brand>

				<Nav className="justify-content-center" activeKey="/home">
					{!store.activeUser ? (
						<>
							{/* <Nav.Item className="loginTab pr-3">
								<Nav.Link href="/library">Library</Nav.Link>
							</Nav.Item> */}
							<Nav.Item className="loginTab pr-3">
								<Nav.Link href="/login">Log In</Nav.Link>
							</Nav.Item>
							<Nav.Item className="signupTab pr-3">
								<Nav.Link href="/signup">Sign Up</Nav.Link>
							</Nav.Item>{" "}
							<Nav.Item>
								<Nav.Link className="aboutTab pr-3" href="/about">
									About
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/contact">Contact</Nav.Link>
							</Nav.Item>
						</>
					) : (
						<>
							<Nav.Item>
								<Nav.Link href="/profile">Profile</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<Nav.Link onClick={() => handleLogOut()}>Sign Out</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="aboutTab pr-3" href="/about">
									About
								</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<Nav.Link href="/contact">Contact</Nav.Link>
							</Nav.Item>
						</>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};
