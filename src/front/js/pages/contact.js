import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<div className="text-center">
				<h2>Contact US</h2>
			</div>
			<div>
				<form className="text-center">
					<div className="row d-block">
						<div className="mb-4 center col-6">
							<label htmlFor="formGroupExampleInput" className="form-label">
								<h3>First Name</h3>
							</label>
							<input
								type="text"
								className="form-control contact"
								id="formGroupExampleInput"
								placeholder="Enter Your First Name"
							/>
						</div>
						<div className="mb-4 col-6">
							<label htmlFor="formGroupExampleInput" className="form-label">
								<h3>Last Name</h3>
							</label>
							<input
								type="text"
								className="form-control contact"
								id="formGroupExampleInput"
								placeholder="Enter Your Last Name"
							/>
						</div>
						<div className="mb-4 col-6">
							<label htmlFor="inputEmail3" className="form-label">
								<h3>Email</h3>
							</label>
							<input
								type="email"
								className="form-control contact"
								id="formGroupExampleInput"
								placeholder="Enter Your Email"
							/>
						</div>
						<div className="textarea mb-2 col-12">
							<label htmlFor="ControlTextarea" className="form-label">
								<h3>Message</h3>
							</label>
							<textarea
								rows="15"
								type="textarea"
								className="form-control contact"
								id="formGroupExampleInput"
								placeholder="Enter Your Message"
							/>
						</div>
					</div>
				</form>
			</div>
			<br />
			<button className="btn btn-light">Send</button>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
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
