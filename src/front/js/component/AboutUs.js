import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Alcohol from "../../img/aboutus-image.jpeg";
import ScriptTag from "react-script-tag";
import { Context } from "../store/appContext";
import { Carta } from "../component/Cards";
import { Carta2 } from "../component/Cards";
import { Carta3 } from "../component/Cards";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "../../styles/aboutus.scss";

export const Aboutus = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron className="aboutusImage" fluid>
				<h1 className="storyTitle">The Story of</h1>
				<h1 className="companyTitle">Drinkology</h1>
			</Jumbotron>

			<Row>
				<Col sm={4}>
					<h1 className="welcomeTitle">What We&#39;re About</h1>
					<p className="aboutusBody">
						Are you are an aspiring bartender? Or are you just a fun individual who is looking to learn new
						cocktail recipes to impress family and friends? Dont worry we are here for you! <br />
						<br /> <strong>Drinkology</strong> was created to keep your mind <strong>refreshed</strong>{" "}
						about the best recipes on the go. You will no longer find yourself scrolling endlessly through
						different sites looking for the perfect one. <br />
						<br />
						Our site allows everyone who is <strong>21 years of age or older</strong> to create a profile
						where they can search for their favorite cocktail recipes and save them for quick access
						anywhere at anytime!{" "}
					</p>
				</Col>
				<Image
					className="firstImage"
					src="https://media.istockphoto.com/photos/close-up-of-pouring-red-wine-into-a-glass-outdoors-picture-id1044127598?k=20&m=1044127598&s=612x612&w=0&h=ncH8Xemdp-Me-Ht1NVum2sc0tsrnBv0mCSOuJhbIKQs="
				/>
			</Row>

			<Row>
				<Image
					className="firstImage"
					src="https://media.istockphoto.com/photos/close-up-of-pouring-red-wine-into-a-glass-outdoors-picture-id1044127598?k=20&m=1044127598&s=612x612&w=0&h=ncH8Xemdp-Me-Ht1NVum2sc0tsrnBv0mCSOuJhbIKQs="
				/>
				<Col sm={4}>
					<h1 className="welcomeTitle">What We&#39;re About</h1>
					<p className="aboutusBody">
						Are you are an aspiring bartender? Or are you just a fun individual who is looking to learn new
						cocktail recipes to impress family and friends? Dont worry we are here for you! <br />
						<br /> <strong>Drinkology</strong> was created to keep your mind <strong>refreshed</strong>{" "}
						about the best recipes on the go. You will no longer find yourself scrolling endlessly through
						different sites looking for the perfect one. <br />
						<br />
						Our site allows everyone who is <strong>21 years of age or older</strong> to create a profile
						where they can search for their favorite cocktail recipes and save them for quick access
						anywhere at anytime!{" "}
					</p>
				</Col>
			</Row>

			<Row>
				<Col sm={4}>
					<h1 className="welcomeTitle">What We&#39;re About</h1>
					<p className="aboutusBody">
						Are you are an aspiring bartender? Or are you just a fun individual who is looking to learn new
						cocktail recipes to impress family and friends? Dont worry we are here for you! <br />
						<br /> <strong>Drinkology</strong> was created to keep your mind <strong>refreshed</strong>{" "}
						about the best recipes on the go. You will no longer find yourself scrolling endlessly through
						different sites looking for the perfect one. <br />
						<br />
						Our site allows everyone who is <strong>21 years of age or older</strong> to create a profile
						where they can search for their favorite cocktail recipes and save them for quick access
						anywhere at anytime!{" "}
					</p>
				</Col>
				<Image
					className="firstImage"
					src="https://media.istockphoto.com/photos/close-up-of-pouring-red-wine-into-a-glass-outdoors-picture-id1044127598?k=20&m=1044127598&s=612x612&w=0&h=ncH8Xemdp-Me-Ht1NVum2sc0tsrnBv0mCSOuJhbIKQs="
				/>
			</Row>

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
		</div>
	);
};
