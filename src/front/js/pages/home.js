import React, { useContext, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import ScriptTag from "react-script-tag";
import { Carta } from "../component/Cards";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Aboutus } from "../component/AboutUs";
import { Contact } from "../component/Contact";
import { Banner } from "../component/jumbotron";
import "../../styles/cards.scss";

export const Home = () => {
	return (
		<div>
			<div>
				<Banner />
			</div>
			<br />
			<div className="black-rectangle">
				<Container>
					<Row>
						<Col>
							<h1 className="text">A Brand New Way To Access Your Favorite Cocktail Recipes.</h1>
						</Col>
					</Row>
				</Container>
			</div>
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
			{/* <div className="black-rectangle">
				<Container>
					<Row>
						<Col>
							<h1 className="text">About Us</h1>
						</Col>
					</Row>
				</Container>
			</div> */}
			{/* <Aboutus /> */}
			<br />
			<br />
			{/* <Contact /> */}
		</div>
	);
};
