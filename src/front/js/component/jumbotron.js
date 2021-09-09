import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import Logo from "../../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/jumbotron.scss";

export const Banner = () => {
	{
		let image1 = "https://www.halfbakedharvest.com/wp-content/uploads/2018/09/Poison-Apple-Martini-4-700x467.jpg";
		let image2 = "https://www.foodrepublic.com/wp-content/uploads/2011/08/BlackBison-700x467.jpg";
		let current = 1;
		let total = 2;
		let time;
		function imageChanger() {
			time = setTimeout("change()", 5000);
		}

		function changeImage() {
			current++;

			if (current > total) currPic = 1;

			src = "image" + current;

			setupPicChange();
		}
	}
	return (
		<Jumbotron className="drink">
			<Container>
				<Image className="l-image pr-0 pl-0" src={Logo} style={{ width: "80%" }} />
			</Container>
		</Jumbotron>
	);
};
