import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

export const SignIn = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		actions.login(email, password, history).catch(error => {
			setError(error);
			console.log("This is my error", error);
		});
	};

	return (
		<div className="card-body p-5 text-center">
			<ul className="nav d-flex justify-content-center" id="myTab" role="tablist" />
			<div className="form input d-flex justify-content-center">
				<form onSubmit={handleSubmit}>
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
								onChange={e => setEmail(e.target.value)}
								value={email}
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
								onChange={e => setPassword(e.target.value)}
								value={password}
							/>
						</div>
					</div>
					{error && (
						<div className="alert alert-danger">
							<h6>{error.message}</h6>
						</div>
					)}
					{/* <!-- Checkbox --> */}
					<div className="settings form-check d-flex  mb-4">
						<input className="form-check-input" type="checkbox" value="" id="form1Example3" />
						<label className="form-check-label" htmlFor="form1Example3">
							{" "}
							Remember password{" "}
						</label>
						<div style={{ paddingLeft: "10px" }}>
							<a href="#">
								<i>Forgot Password</i>
							</a>
						</div>
					</div>
					<button href="/profile" className="loginButton btn btn-primary btn-lg btn-block" type="submit">
						Log In
					</button>
				</form>
			</div>
		</div>
	);
};
