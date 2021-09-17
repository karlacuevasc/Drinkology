import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	// return (
	// 	<div className="cartica vh-100">
	// 		<Form>
	// 			<Container>
	// 				<Form.Group className="mb-3" controlId="formBasicEmail">
	// 					<Form.Control type="email" placeholder="Enter email" />
	// 				</Form.Group>

	// 				<Form.Group className="mb-3" controlId="formBasicPassword">
	// 					<Form.Control type="password" placeholder="Password" />
	// 				</Form.Group>
	// 				<Form.Group className="mb-3" controlId="formBasicCheckbox">
	// 					<Form.Check type="checkbox" label="Remember Password" />
	// 				</Form.Group>
	// 				<Button variant="dark" type="submit">
	// 					Login
	// 				</Button>
	// 			</Container>
	// 		</Form>
	// 	</div>

	return (
		<div className="loginImage">
			<div className="loginBackground vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-8 col-lg-6 col-xl-5">
							<div className="card loginCardBackground shadow-2-strong" style={{ borderRadius: "1rem" }}>
								<div className="card-body p-5 text-center">
									<ul className="nav d-flex justify-content-center" id="myTab" role="tablist" />
									<div className="form input d-flex justify-content-center">
										<form>
											<div>
												<h1 className="signupTitle">Log In</h1>
											</div>
											<div>
												<div className="input-group-prepend" />

												<div className="email form-outline mb-4">
													<input
														type="email"
														id="typeFirstNameX"
														className="form-control form-control-lg"
														placeholder="Email"
													/>
												</div>
											</div>

											<div className="form input justify">
												<div className="input-group-prepend" />
												<div className="password form-outline mb-4">
													<input
														type="password"
														id="typePasswordX"
														className="form-control form-control-lg"
														placeholder="Password"
													/>
												</div>
											</div>

											{/* <!-- Checkbox --> */}
											<div className="settings form-check d-flex  mb-4">
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
												<div style={{ paddingLeft: "10px" }}>
													<a href="#">Forgot Password</a>
												</div>
											</div>
											<button
												className="loginButton btn btn-primary btn-lg btn-block"
												type="submit">
												Log In
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
