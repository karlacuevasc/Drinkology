import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Iphone from "../../img/on-the-go.jpeg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Search } from "../pages/search";
import "../../styles/profilecard.scss";

export const ProfileCarta = () => {
	return (
		<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="pillstyle mb-3 pt-5">
			<Tab eventKey="home" title="Recipes" className="recipespill">
				<Card className="profileCarta" style={{ width: "55rem", height: "70rem" }}>
					<Card.Img
						className="profileImage"
						variant="top"
						src="https://amandascookin.com/wp-content/uploads/2019/05/moscow-mule-680.jpg"
					/>
					<Card.Body>
						<h1 className="recipeBody">(Cocktail)</h1>
						<p className="recipeBody">(Cocktail body)</p>
					</Card.Body>
				</Card>
			</Tab>
			<Tab eventKey="profile" title="Search">
				<Search />
			</Tab>
		</Tabs>
	);
};
