import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Alcohol from "../../img/aboutus-image.jpeg";
import ScriptTag from "react-script-tag";
import { Context } from "../store/appContext";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
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
			<div className="m-0">
				<p className="aboutusBody card-text">
					It is a long established fact that a reader will be distracted by the readable content of a page
					when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
					distribution of letters, as opposed to using Content here, content here , making it look like
					readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
					default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.
					Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
					humour and the like).
				</p>
			</div>
		</div>
	);
};
