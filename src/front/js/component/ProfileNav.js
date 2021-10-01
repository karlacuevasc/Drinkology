import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

export const ProfileNavbar = () => {
	const { store } = useContext(Context);

	return (
		<h1 style={{ textAlign: "center", paddingTop: "15vh", paddingBottom: "5vh", fontSize: "3rem" }}>
			Hi {store.activeUser}, what are we drinking today?
		</h1>
	);
};
