import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Logo from "../../img/logo.png";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

export const Banner = () => {
	return (
		<div className="jumbotron m-0 jumbotron-fluid">
			<Container>
				<Row>
					<Col>
						<image className="display-2" src={Logo} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
