import React, { useContext, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import { Drink } from "../component/LibraryCards";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import Miami from "../../img/miami.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/library.scss";

export const Cocktails = () => {
	const { store } = useContext(Context);
	return (
		<div>
			<Jumbotron className="libraryJumbo">
				<h1 className="cocktailbarTitle">Cocktail Bar</h1>
			</Jumbotron>
			<div className="scroll">
				{store.cocktails.map((cocktail, i) => {
					return <Drink key={i} strDrink={cocktail.strDrink} strDrinkThumb={cocktail.strDrinkThumb} />;
				})}
			</div>

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
					<Button href="/signup" size="lg" variant="danger">
						Sign Up
					</Button>
				</Col>
			</Row>
			<br />
			<br />
		</div>
	);
};
