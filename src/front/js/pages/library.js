import React, { useContext, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import { Drink } from "../component/LibraryCards";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/library.scss";

export const Cocktails = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1>All</h1>
			<div className="scroll">
				<Drink />
			</div>
			<h1>Alcoholic</h1>
			<div className="scroll">
				<Drink />
			</div>
			<h1>Non-Alcoholic</h1>
			<div className="scroll">
				<Drink />
			</div>

			<Button href="/signup" size="lg" variant="danger">
				Sign Up to Discover More
			</Button>
		</div>
	);
};

// {store.cocktails.map((cocktails, i) => {
// 	return (
// 		<Drink />
// 	);
// })}
