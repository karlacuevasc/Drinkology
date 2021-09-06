import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Logo from "../../img/logo.png";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/jumbotron.scss";

export const Banner = () => {
	return (
		<div className="jumbotron m-0 jumbotron-fluid">
			<Container>{/* <Image className="l-image" src={Logo} /> */}</Container>
		</div>
	);
};
