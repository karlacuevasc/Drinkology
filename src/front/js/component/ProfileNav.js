import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export const ProfileNavbar = () => {
	return (
		<h1 style={{ textAlign: "center", paddingTop: "5vh", paddingBottom: "5vh", fontSize: "3rem" }}>
			What are we drinking today?
		</h1>

		// <div className="d- flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
		// 	<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
		// 		<span className="fs-4">What are we drinking today?</span>
		// 	</a>

		/* <hr />
			<ul className="nav nav-pills flex-column mb-auto">
				<li className="nav-item">
					<a href="#" className="nav-link active">
						<i className="fas fa-home">
							<span className="ml-6">Home</span>
						</i>
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link text-white">
						<i className="fas fa-home">
							<span className="ml-6">Dashboard</span>
						</i>
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link text-white">
						<i className="fas fa-home">
							<span className="ml-6">Recipes</span>
						</i>
					</a>
				</li>
			</ul>
			<hr /> */
		// </div>
	);
};
