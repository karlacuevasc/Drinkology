import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ScriptTag from "react-script-tag";
import { Carta } from "../component/Cards";

export const Home = () => {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-2">
						A Brand New Way <br />
						to Access Your <br />
						Favorite Cocktail <br /> Recipes
					</h1>
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Get Started
					</a>
				</div>
			</div>

			<br />
			<div
				className="cards d-flex justify-content-center"
				data-aos="fade-zoom-in"
				data-aos-offset="200"
				data-aos-easing="ease-in-sine"
				data-aos-duration="600">
				<Carta />
				<Carta />
				<Carta />
				<ScriptTag src="/workspace/Final-Project-/node_modules/aos/dist/aos.js" />
			</div>
		</div>
	);
};
