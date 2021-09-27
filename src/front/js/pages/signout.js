import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const SignOut = () => {
	const { store, actions } = useContext(Context);

	const clear = () => {
		localStorage.clear("activeUser");
		sessionStorage.clear(activeUser.first_name);
	};

	return (
		<button
			onClick={() => {
				clear();
			}}>
			{/* <Link to="/" /> */}
		</button>
	);
};
