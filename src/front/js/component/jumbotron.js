import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Logo from "../../img/logo.png";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/jumbotron.scss";

export const Banner = () => {
	return (
		<Container className="drink">
			<Row>
				<Col>
					<Image className="l-image pr-0 pl-0" src={Logo} style={{ width: "100%" }} />
				</Col>
			</Row>
		</Container>
	);
};
