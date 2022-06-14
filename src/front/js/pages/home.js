import React, { useContext, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import { Carta, Carta3 } from "../component/HomePageCards";
import { Banner } from "../component/Intro";
import { DrinkologyLogo } from "../component/logo";
import { Library } from "./library";
import "../../styles/cards.css";

export const Home = () => {
	const { actions } = useContext(Context);
	useEffect(() => {
		actions.randomcocktailsInfo();
	}, []);
	return (
		<div>
			<Banner />

			<DrinkologyLogo />

			<Carta />

			<Carta3 />

			<Library />
		</div>
	);
};
