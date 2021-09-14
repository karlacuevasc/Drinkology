import React, { useContext, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import ScriptTag from "react-script-tag";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Carta, Carta2, Carta3 } from "../component/Cards";
import { Aboutus } from "../component/AboutUs";
import { Contact } from "../component/Contact";
import { Banner } from "../component/jumbotron";
import { Container } from "react-bootstrap";
import { Welcome } from "../component/welcome";
import Logo from "../../img/logo.png";
import { DrinkologyLogo } from "../component/logo";
import { Instructions } from "../component/instructions";
import "../../styles/cards.scss";

export const Home = () => {
	return (
		<div>
			<Banner />

			<DrinkologyLogo />

			<Welcome />

			<Row className="cards">
				<Col sm={4}>
					<Carta />
				</Col>
				<Col sm={4}>
					<Carta2 />
				</Col>
				<Col sm={4}>
					<Carta3 />
				</Col>
				<ScriptTag src="/workspace/Final-Project-/node_modules/aos/dist/aos.js" />
			</Row>
			<Instructions />
		</div>
	);
};
