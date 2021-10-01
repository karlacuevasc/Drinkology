import React, { useContext, useEffect, Component } from "react";
import { Carta, Carta2, Carta3 } from "../component/HomePageCards";
import { Banner } from "../component/Intro";
import { DrinkologyLogo } from "../component/logo";
import { Library } from "./library";
import "../../styles/cards.scss";

export const Home = () => {
	return (
		<div>
			<Banner />

			<DrinkologyLogo />

			<Carta />

			<Carta2 />

			<Carta3 />

			<Library />
		</div>
	);
};
