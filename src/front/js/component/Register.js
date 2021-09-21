import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [error, setError] = useState(null);
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		actions
			.signup(email, password, first_name, last_name)
			.then(() => history.push("/profile"))
			.catch(error => {
				setError(error);
				console.log("This is my error", error);
			});
	};
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
										<form onSubmit={handleSubmit}>
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
														onChange={e => setFirst_name(e.target.value)}
														value={first_name}
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
														onChange={e => setLast_name(e.target.value)}
														value={last_name}
													/>
												</div>
											</div>
											<div>
												<div className="input-group-prepend" />

												<div className="email form-outline mb-4">
													<input
														type="DOB"
														id="typeLastNameX"
														className="form-control form-control-lg"
														placeholder="mm/dd/yyyy"
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
														onChange={e => setEmail(e.target.value)}
														value={email}
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
														placeholder="Password"
														onChange={e => setPassword(e.target.value)}
														value={password}
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
