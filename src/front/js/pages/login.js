import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="loginBackground vh-100">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5">
						<div className="card cardBackground shadow-2-strong" style={{ borderRadius: "1rem" }}>
							<div className="card-body p-5 text-center">
								<ul className="nav d-flex justify-content-center" id="myTab" role="tablist">
									<li className="nav-item" role="presentation">
										<a
											className="nav-link active"
											id="home-tab"
											data-toggle="tab"
											href="#home"
											role="tab"
											aria-controls="home"
											aria-selected="true">
											<Link
												to="/login"
												className="nav-link item-color"
												aria-current="page"
												href="#">
												{/* <button className="btn btn-primary btn-lg btn-block"> */}
												<h5 className="logInText">Log In</h5>
												{/* </button> */}
											</Link>
										</a>
									</li>
									<li className="nav-item" role="presentation">
										<a
											className="nav-link"
											id="profile-tab"
											data-toggle="tab"
											href="#profile"
											role="tab"
											aria-controls="profile"
											aria-selected="false">
											<Link
												to="/signup"
												className="nav-link item-color"
												aria-current="page"
												href="#">
												<h5 className="signUpText">Sign Up</h5>
											</Link>
										</a>
									</li>
								</ul>
								<div className="form input d-flex justify-content-center">
									<form>
										<div className="form-group input-group">
											<div className="input-group-prepend" />

											<div className="email m-auto form-outline mb-4">
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
											<div className="password m-auto form-outline mb-4">
												<input
													type="password"
													id="typePasswordX"
													className="form-control form-control-lg"
													placeholder="Password"
												/>
											</div>
										</div>
										{/* <!-- Checkbox --> */}
										<div className="form-check d-flex justify-content-start mb-4 pt-4">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="form1Example3"
											/>
											<label className="loginCheckbox form-check-label" htmlFor="form1Example3">
												{" "}
												Remember password{" "}
											</label>
											<span className="forgotPassword">
												<a href="#">Forgot Password</a>
											</span>
										</div>
										<button className="loginButton btn btn-primary btn-lg btn-block" type="submit">
											Login
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

{
	/* <section class="vh-100" style="background-color: #508bfc;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

		  <Link to="/login" className="nav-link item-color" aria-current="page" href="#">
									<h3 className="login-text">Log In</h3>
								</Link>

            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX" class="form-control form-control-lg" />
              <label class="form-label" for="typeEmailX">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="typePasswordX" class="form-control form-control-lg" />
              <label class="form-label" for="typePasswordX">Password</label>
            </div>

            <!-- Checkbox -->
            <div class="form-check d-flex justify-content-start mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr class="my-4">

            <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;" type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <button class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;" type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section> */
}
