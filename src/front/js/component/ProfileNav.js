import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

export const ProfileNavbar = () => {
	const { store, actions } = useContext(Context);
	const name = localStorage.getItem("first_name");
	const getName = () => {
		if (name != "" || name != null) {
			return name + "What are we drinking today?";
		}
	};

	return (
		<h1 style={{ textAlign: "center", paddingTop: "5vh", paddingBottom: "5vh", fontSize: "3rem" }}>
			{sessionStorage.getItem("activeUser")} what are we drinking today?
		</h1>
	);
};
