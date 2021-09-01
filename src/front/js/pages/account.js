import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Account = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="mx-auto" style={{ width: "200px" }}>
				<div className="account-card card" style={{ width: "18rem" }}>
					<a href="https://placeholder.com">
						<img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
					</a>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text text-danger">
							Some quick example text to build on the card title and make up the bulk of the card&apos;s
							content.
						</p>
						<a href="#" className="account-btn btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="d- flex-column flex-shrink-0 p-3 text-white account-color" style={{ width: "200px" }}>
				<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration">
					<span className="fs-4">Drink Project</span>
				</a>
				<hr />
				<ul className="nav nav-pills flex-clumn mb-auto">
					<li className="nav-item">
						<a href="#" className="nav-link active">
							<i className="fas fa-home">
								<span className="ml-6">Home</span>
							</i>
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link text-color">
							<i className="fas fa-home">
								<span className="ml-6">Dashboard</span>
							</i>
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link text-color">
							<i className="fas fa-home">
								<span className="ml-6">Recipes</span>
							</i>
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link text-color">
							<i className="fas fa-home">
								<span className="ml-6">Home</span>
							</i>
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link text-color">
							<i className="fas fa-home">
								<span className="ml-6">Home</span>
							</i>
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link text-color">
							<i className="fas fa-home">
								<span className="ml-6">Home</span>
							</i>
						</a>
					</li>
				</ul>
				<hr />
				<div className="dropdown">
					<a
						href="#"
						className="d-flex align-iems-center text-black text-decoration-non dropdown-toggle"
						id="dropdownUser1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Allen
					</a>
				</div>

				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</>
	);
};

{
	/* <ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul> */
}
