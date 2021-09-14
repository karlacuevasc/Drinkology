import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import Logo from "../../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/jumbotron.scss";

export const Banner = () => {
	return (
		<Jumbotron className="drink">
			<Container>{/* <Image className="l-image pr-0 pl-0" src={Logo} style={{ width: "80%" }} /> */}</Container>
		</Jumbotron>
	);
};
