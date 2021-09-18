import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "../../styles/login.scss";
import { SignIn } from "../component/Sign";

export const Login = () => {
	return <SignIn />;
};

// return (
// 	<div className="cartica vh-100">
// 		<Form>
// 			<Container>
// 				<Form.Group className="mb-3" controlId="formBasicEmail">
// 					<Form.Control type="email" placeholder="Enter email" />
// 				</Form.Group>

// 				<Form.Group className="mb-3" controlId="formBasicPassword">
// 					<Form.Control type="password" placeholder="Password" />
// 				</Form.Group>
// 				<Form.Group className="mb-3" controlId="formBasicCheckbox">
// 					<Form.Check type="checkbox" label="Remember Password" />
// 				</Form.Group>
// 				<Button variant="dark" type="submit">
// 					Login
// 				</Button>
// 			</Container>
// 		</Form>
// 	</div>
