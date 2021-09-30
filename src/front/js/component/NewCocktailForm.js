import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import "../../styles/signup.scss";

export const NewCocktail = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [alcohol_content, setAlcohol_content] = useState("");
	const [glassware, setGlassware] = useState("");
	const [first_step, setFirst_step] = useState("");
	const [second_step, setSecond_step] = useState("");
	const [third_step, setThird_step] = useState("");
	const [fourth_step, setFourth_step] = useState("");
	const [fifth_step, setFifth_step] = useState("");
	const [first_ingredient, setFirst_ingredient] = useState("");
	const [second_ingredient, setSecond_ingredient] = useState("");
	const [third_ingredient, setThird_ingredient] = useState("");
	const [fourth_ingredient, setFourth_ingredient] = useState("");
	const [fifth_ingredient, setFifth_ingredient] = useState("");
	const [first_measurement, setFirst_measurement] = useState("");
	const [second_measurement, setSecond_measurement] = useState("");
	const [third_measurement, setThird_measurement] = useState("");
	const [fourth_measurement, setFourth_measurement] = useState("");
	const [fifth_measurement, setFifth_measurement] = useState("");
	const [error, setError] = useState(null);
	const history = useHistory();
	const [messageState, setMessageState] = useState({
		isActive: false,
		message: "hola"
	});

	const handleSubmit = e => {
		e.preventDefault();
		console.log(
			name,
			alcohol_content,
			glassware,
			first_step,
			second_step,
			third_step,
			fourth_step,
			fifth_step,
			first_ingredient,
			second_ingredient,
			third_ingredient,
			fourth_ingredient,
			fifth_ingredient,
			first_measurement,
			second_measurement,
			third_measurement,
			fourth_measurement,
			fifth_measurement
		);
		actions
			.newCocktailForm(
				name,
				alcohol_content,
				glassware,
				first_step,
				second_step,
				third_step,
				fourth_step,
				fifth_step,
				first_ingredient,
				second_ingredient,
				third_ingredient,
				fourth_ingredient,
				fifth_ingredient,
				first_measurement,
				second_measurement,
				third_measurement,
				fourth_measurement,
				fifth_measurement,
				history
			)
			.then(data => console.log("data"))
			.catch(error => {
				setError(error);
				console.log("This is my error", error);
			});
	};

	return (
		<div className="">
			<div className="signupBackground vh-100">
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="">
							<div className="card signupCardBackground shadow-2-strong" style={{ borderRadius: "1rem" }}>
								<div className="card-body p-5 text-center">
									<ul className="nav d-flex justify-content-center" id="myTab" role="tablist" />
									<div className="form input d-flex justify-content-center">
										<form className="loginForm" onSubmit={handleSubmit}>
											<Tabs
												defaultActiveKey="general"
												id="uncontrolled-tab-example"
												className="pillstyle mb-5 pt-5">
												<Tab eventKey="general" title="General Info">
													<div>
														<div className="input-group-prepend " />

														<div className="email form-outline mb-4">
															<input
																name="name"
																type="cocktail name"
																id="typeCocktailNameX"
																className="form-control form-control-lg "
																placeholder="Cocktail Name"
																onChange={e => setName(e.target.value)}
																value={name}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="liquor content"
																id="typeLiquorContentX"
																className="form-control form-control-lg"
																placeholder="Alcoholic or Non-Alcoholic"
																onChange={e => setAlcohol_content(e.target.value)}
																value={alcohol_content}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="glass type"
																id="typeGlassTypeX"
																className="form-control form-control-lg"
																placeholder="Glassware"
																onChange={e => setGlassware(e.target.value)}
																value={glassware}
															/>
														</div>
													</div>
												</Tab>
												<Tab eventKey="ingredients" title="Ingredients">
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="first ingredient"
																id="typeFirstIngredientX"
																className="form-control form-control-lg"
																placeholder="First Ingredient"
																onChange={e => setFirst_ingredient(e.target.value)}
																value={first_ingredient}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="second ingredient"
																id="typeSecondIngredientX"
																className="form-control form-control-lg"
																placeholder="Second Ingredient"
																onChange={e => setSecond_ingredient(e.target.value)}
																value={second_ingredient}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="third ingredient"
																id="typeThirdIngredientX"
																className="form-control form-control-lg"
																placeholder="Third Ingredient"
																onChange={e => setThird_ingredient(e.target.value)}
																value={third_ingredient}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="fourth ingredient"
																id="typeFourthIngredientX"
																className="form-control form-control-lg"
																placeholder="Fourth Ingredient"
																onChange={e => setFourth_ingredient(e.target.value)}
																value={fourth_ingredient}
															/>
														</div>
													</div>
												</Tab>
												<Tab eventKey="general" title="General Info">
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="first step"
																id="typeFirstIngredientX"
																className="form-control form-control-lg"
																placeholder="First Step"
																onChange={e => setFirst_step(e.target.value)}
																value={first_step}
															/>
														</div>
													</div>
												</Tab>
												<Tab eventKey="instructions" title="Instructions">
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="first step"
																id="typeFirstIngredientX"
																className="form-control form-control-lg"
																placeholder="First Step"
																onChange={e => setFirst_step(e.target.value)}
																value={first_step}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="second step"
																id="typeSecondIngredientX"
																className="form-control form-control-lg"
																placeholder="Second Step"
																onChange={e => setSecond_step(e.target.value)}
																value={second_step}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="third step"
																id="typeThirdIngredientX"
																className="form-control form-control-lg"
																placeholder="Third Step"
																onChange={e => setThird_step(e.target.value)}
																value={third_step}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="fourth step"
																id="typeFourthIngredientX"
																className="form-control form-control-lg"
																placeholder="Fourth Step"
																onChange={e => setFourth_step(e.target.value)}
																value={fourth_step}
															/>
														</div>
													</div>
												</Tab>
											</Tabs>

											<button
												className="signupButton btn btn-primary btn-lg btn-block mt-5"
												type="submit">
												Create Cocktail
											</button>
											<br />
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
