import React, { useState, useEffect, useContext, Component } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Form, FormControl } from "react-bootstrap";
import "../../styles/profilecard.css";
import "../../styles/search.css";

export const Search = () => {
	const { actions, store } = useContext(Context);
	const [searchParam, setSearchParam] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		if (searchParam.trim() === "") {
			return;
		}
		actions.searchCocktailsInfo(searchParam);
	};
	useEffect(
		() => {
			if (searchParam === "") {
				actions.clearFilteredCocktails("");
			}
		},
		[searchParam]
	);
	return (
		<Card.Body className="cartaBody">
			<Form className="cartaForm d-flex" onSubmit={handleSubmit}>
				<FormControl
					type="search"
					placeholder="Search"
					className="mr-2"
					aria-label="Search"
					value={searchParam}
					onChange={e => setSearchParam(e.target.value)}
				/>
				<Button className="searchbutton" type="submit">
					Search
				</Button>
			</Form>
		</Card.Body>
	);
};
