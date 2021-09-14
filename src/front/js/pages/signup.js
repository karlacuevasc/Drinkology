import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Alcohol from "../../img/alcohol.jpeg";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/signup.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="signupImage">
			<div className="signupBackground vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-8 col-lg-6 col-xl-5">
							<div className="card signupCardBackground shadow-2-strong" style={{ borderRadius: "1rem" }}>
								<div className="card-body p-5 text-center">
									<ul className="nav d-flex justify-content-center" id="myTab" role="tablist" />
									<div className="form input d-flex justify-content-center">
										<form>
											<div>
												<h1 className="signupTitle">Sign Up</h1>
											</div>
											<div>
												<div className="input-group-prepend" />

												<div className="email form-outline mb-4">
													<input
														type="first name"
														id="typeFirstNameX"
														className="form-control form-control-lg"
														placeholder="First Name"
													/>
												</div>
											</div>
											<div>
												<div className="input-group-prepend" />

												<div className="email form-outline mb-4">
													<input
														type="last name"
														id="typeLastNameX"
														className="form-control form-control-lg"
														placeholder="Last Name"
													/>
												</div>
											</div>
											<div>
												<div className="input-group-prepend" />

												<div className="email form-outline mb-4">
													<input
														type="email"
														id="typeEmailX"
														className="form-control form-control-lg"
														placeholder="Email"
													/>
												</div>
											</div>
											<div className="form input d-flex justify">
												<div className="input-group-prepend" />
												<div className="password form-outline mb-4">
													<input
														type="password"
														id="typePasswordX"
														className="form-control form-control-lg"
														placeholder="Create New Password"
													/>
												</div>
											</div>

											{/* <!-- Checkbox --> */}
											<div className="form-check d-flex  mb-4">
												<input
													className="form-check-input"
													type="checkbox"
													value=""
													id="form1Example3"
												/>
												<label className="form-check-label" htmlFor="form1Example3">
													{" "}
													Remember password{" "}
												</label>
											</div>
											<button
												className="signupButton btn btn-primary btn-lg btn-block"
												type="submit">
												Sign Up
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
