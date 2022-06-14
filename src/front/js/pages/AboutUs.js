import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Karla, Luis } from "../component/AboutUsCards";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";
import Miami from "../../img/miami.jpeg";
import "../../styles/aboutus.css";

export const Aboutus = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron className="aboutusImage" fluid>
				<h1 className="storyTitle">The Story of</h1>
				<h1 className="companyTitle">Drinkology</h1>
			</Jumbotron>

			<Row className="aboutus">
				<Col sm={6} className="aboutuscontainer">
					<h1 className="welcomeTitle">It All Started With... </h1>
					<p className="aboutusBody">
						Based out of <strong>Miami, FL</strong>, Luis Furlan and Karla Cuevas created{" "}
						<strong>Drinkology</strong> in 2021 to motivate and inspire those who love to get creative when
						making drinks.
						<br />
					</p>
				</Col>
				<Col sm={6} className="aboutusimage">
					<Image className="firstImage" src={Miami} />
				</Col>
			</Row>

			<Row className="aboutus2">
				<Col sm={6} className="aboutusimage2">
					<Image
						className="firstImage"
						src="https://media.istockphoto.com/photos/close-up-of-pouring-red-wine-into-a-glass-outdoors-picture-id1044127598?k=20&m=1044127598&s=612x612&w=0&h=ncH8Xemdp-Me-Ht1NVum2sc0tsrnBv0mCSOuJhbIKQs="
					/>
				</Col>
				<Col sm={6} className="aboutuscontainer2">
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
			<Col>
				<h1 className="teamTitle">Meet the Team</h1>
			</Col>

			<Row className="cards">
				<Col sm={6}>
					<Karla />
				</Col>
				<Col sm={6}>
					<Luis />
				</Col>
			</Row>
		</div>
	);
};
