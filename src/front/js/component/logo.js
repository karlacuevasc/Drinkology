import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Logo from "../../img/logo.png";
import { Container } from "react-bootstrap";
import "../../styles/logo.css";

export const DrinkologyLogo = () => {
	return (
		<Container className="logoBackground">
			<Image src={Logo} />
		</Container>
	);
};
