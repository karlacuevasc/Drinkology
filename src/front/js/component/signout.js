import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const SignOut = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const handleLogOut = () => {
		localStorage.clear();
		sessionStorage.clear();
		history.push("/login");
	};

	return <button onClick={() => handleLogOut()}> Sign out </button>;
};
