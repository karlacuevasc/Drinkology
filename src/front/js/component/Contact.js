import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ScriptTag from "react-script-tag";
import { Context } from "../store/appContext";
import "../../styles/contact.scss";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="contact-sheet">
			<h1>Test</h1>
		</div>
	);
};
