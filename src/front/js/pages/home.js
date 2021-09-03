import React, { useContext, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import ScriptTag from "react-script-tag";
import { Carta } from "../component/Cards";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Aboutus } from "../component/AboutUs";
import { Contact } from "../component/Contact";

export const Home = () => {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid">
				<Container>
					<Row>
						<Col>
							<h1 className="display-2">Insert Text</h1>
							<Button>Show More</Button>
						</Col>
					</Row>
				</Container>
			</div>
			<br />
			<div
				className="cards d-flex justify-content-center"
				data-aos="fade-zoom-in"
				data-aos-offset="200"
				data-aos-easing="ease-in-sine"
				data-aos-duration="600">
				<Carta />
				<Carta />
				<Carta />
				<ScriptTag src="/workspace/Final-Project-/node_modules/aos/dist/aos.js" />
			</div>
			<br />
			<br />
			<Aboutus />
			<br />
			<br />
			<Contact />
		</div>
	);
};
