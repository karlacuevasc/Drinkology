import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Logo from "../../img/logo.png";
import Alcohol from "../../img/aboutus-image.jpeg";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

export const DrinkologyLogo = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Image src={Logo} />
				</Col>
			</Row>
		</Container>
	);
};
