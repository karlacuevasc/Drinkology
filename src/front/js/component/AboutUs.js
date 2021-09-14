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
				<div className="">
					<Container className="">
						<h1 className="storyTitle">The Story of Drinkology</h1>
					</Container>
				</div>
			</Jumbotron>
			<Container>
				<Row>
					<Col>
						<div className="m-0">
							<h1 className="welcomeTitle">What We&#39;re About</h1>
							<p className="aboutusBody card-text">
								Are you are an aspiring bartender? Or are you just a fun individual who is looking to
								learn new cocktail recipes to impress family and friends? Dont worry we are here for
								you! <br />
								<br /> <strong>Drinkology</strong> was created to keep your mind{" "}
								<strong>refreshed</strong> about the best recipes on the go. You will no longer find
								yourself scrolling endlessly through different sites looking for the perfect one. <br />
								<br />
								Our site allows everyone who is <strong>21 years of age or older</strong> to create a
								profile where they can search for their favorite cocktail recipes and save them for
								quick access anywhere at anytime!{" "}
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
