import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Alcohol from "../../img/cocktail2.jpeg";
import ScriptTag from "react-script-tag";
import { Context } from "../store/appContext";
import "../../styles/aboutus.scss";

export const Aboutus = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="aboutusContainer d-flex">
			<img className="image container-lg img-fluid" src={Alcohol} />

			<div>
				<div className="card-body">
					<p className="card-text">
						It is a long established fact that a reader will be distracted by the readable content of a page
						when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using Content here, content here , making it look like
						readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
						their default model text, and a search for lorem ipsum will uncover many web sites still in
						their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
						purpose (injected humour and the like).
					</p>
					<ScriptTag src="/workspace/Final-Project-/node_modules/aos/dist/aos.js" />
				</div>
			</div>
		</div>
	);
};
