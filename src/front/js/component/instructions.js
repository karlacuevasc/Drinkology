import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../../styles/instructions.scss";

export const Instructions = () => {
	return (
		<div className="black-rectangle-instructions">
			<Row>
				<Col>
					<h1 className="textWhiteInstructions">Getting Started</h1>
				</Col>
			</Row>
		</div>
	);
};
