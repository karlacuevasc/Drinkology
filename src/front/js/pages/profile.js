import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileCarta } from "../component/ProfileCard";
import { ProfileNavbar } from "../component/ProfileNav";

export const Account = () => {
	return (
		<div className="d-flex">
			<div>
				<ProfileNavbar />
			</div>
			<div className="m-auto pb-5">
				<ProfileCarta />
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
