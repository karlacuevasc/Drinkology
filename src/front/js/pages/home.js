import React, { useContext, useEffect, Component } from "react";
import { Carta, Carta2, Carta3 } from "../component/Cards";
import { Banner } from "../component/Intro";
import { DrinkologyLogo } from "../component/logo";
import { Instructions } from "../component/instructions";
import "../../styles/cards.scss";

export const Home = () => {
	return (
		<div>
			<Banner />

			<DrinkologyLogo />

			<Carta />

			<Carta2 />

			<Carta3 />

			<Instructions />
		</div>
	);
};
