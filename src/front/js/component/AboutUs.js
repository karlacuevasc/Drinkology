import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Alcohol from "../../img/aboutus-image.jpeg";
import ScriptTag from "react-script-tag";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../../styles/aboutus.scss";

export const Aboutus = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron className="aboutusImage" fluid>
				<div className="storytitleDiv">
					<Container className="storytitleContainer">
						<h1 className="storyTitle ">
							The Story of <br />
							Drinkology
						</h1>
					</Container>
				</div>
			</Jumbotron>
			<Container>
				<Row>
					<Col>
						<div className="m-0">
							<h1 className="welcomeTitle">Welcome to Drinkology</h1>
							<p className="aboutusBody card-text">
								Are you are an aspiring bartender? Or are you just a fun individual who is looking to
								learn new cocktail recipes to impress family and friends? Dont worry we are here for
								you! <br />
								<br /> Based out of Miami, FL, Drinkology was created to keep users from scrolling
								endlessly through different sites when looking for confusing recipes that they will most
								likely forget. Everyone who is 21+ will have the opportunity to get quick access to
								their favorite cocktails from anywhere!{" "}
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
