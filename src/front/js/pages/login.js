import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { SignIn } from "../component/Sign";
import "../../styles/login.css";

export const Login = () => {
	return (
		<div className="loginImage">
			<div className="loginBackground vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-8 col-lg-6 col-xl-5">
							<div className="card loginCardBackground shadow-2-strong" style={{ borderRadius: "1rem" }}>
								<SignIn />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
