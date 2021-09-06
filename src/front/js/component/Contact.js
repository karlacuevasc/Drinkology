import React, { useState, useEffect, useContext } from "react";
// import "../../styles/contact.scss";
import { Link } from "react-router-dom";
import "../../styles/contact.scss";

import { Context } from "../store/appContext";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="background">
			<div className="contact p-5 m-auto col-6">
				<div className="text-center">
					<h2>Questions? Feel Free To Send Us a Message!</h2>
				</div>
				<div>
					<form className="text-center">
						<div className="row d-block">
							<div className="mb-4 center col">
								<input
									type="text"
									className="form-control contact"
									id="formGroupExampleInput"
									placeholder="First Name"
								/>
							</div>
							<div className="mb-4 col">
								<input
									type="text"
									className="form-control contact"
									id="formGroupExampleInput"
									placeholder="Last Name"
								/>
							</div>
							<div className="mb-4 col">
								<input
									type="email"
									className="form-control contact"
									id="formGroupExampleInput"
									placeholder="Email"
								/>
							</div>
							<div className="textarea mb-2 col">
								<label htmlFor="ControlTextarea" className="form-label">
									<h3>Message</h3>
								</label>
								<textarea
									rows="4"
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
				<div className="text-center">
					<button>Send</button>
				</div>
				<br />
				{/* <Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link> */}
			</div>
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
