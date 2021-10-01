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
	const [image, setImage] = useState("");
	const [alcohol_content, setAlcohol_content] = useState("");
	const [glassware, setGlassware] = useState("");
	const [garnish, setGarnish] = useState("");
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
	const [cocktail, setCocktail] = useState({});
	const [formStatus, setFormstatus] = useState({ status: "ready", message: null });
	const history = useHistory();
	const [messageState, setMessageState] = useState({
		isActive: false,
		message: "hola"
	});

	const handleSubmit = e => {
		setFormstatus({ status: "pending", message: "Pending..." });
		e.preventDefault();
		console.log(
			name,
			image,
			alcohol_content,
			glassware,
			garnish,
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
				image,
				alcohol_content,
				glassware,
				garnish,
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
			.then(data => setFormstatus({ status: "ready", message: "Success" }))
			.catch(error => {
				setFormstatus({ status: "error", message: error.message });
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
														<div className="input-group-prepend " />

														<div className="email form-outline mb-4">
															<input
																name="image"
																type="cocktail image"
																id="typeCocktailImageX"
																className="form-control form-control-lg "
																placeholder="Image URL"
																onChange={e => setImage(e.target.value)}
																value={image}
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
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="garnish"
																id="typeGarnishX"
																className="form-control form-control-lg"
																placeholder="Garnish"
																onChange={e => setGarnish(e.target.value)}
																value={garnish}
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
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="fifth ingredient"
																id="typeFifthIngredientX"
																className="form-control form-control-lg"
																placeholder="Fifth Ingredient"
																onChange={e => setFifth_ingredient(e.target.value)}
																value={fifth_ingredient}
															/>
														</div>
													</div>
												</Tab>
												<Tab eventKey="measurements" title="Measurements">
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="measurements"
																id="typeFirstMeasurementX"
																className="form-control form-control-lg"
																placeholder="First Measurement"
																onChange={e => setFirst_measurement(e.target.value)}
																value={first_measurement}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="measurements"
																id="typeSecondMeasurementX"
																className="form-control form-control-lg"
																placeholder="Second Measurement"
																onChange={e => setSecond_measurement(e.target.value)}
																value={second_measurement}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="measurements"
																id="typeThirdMeasurementX"
																className="form-control form-control-lg"
																placeholder="Third Measurement"
																onChange={e => setThird_measurement(e.target.value)}
																value={third_measurement}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="measurements"
																id="typeFourthMeasurementX"
																className="form-control form-control-lg"
																placeholder="Fourth Measurement"
																onChange={e => setFourth_measurement(e.target.value)}
																value={fourth_measurement}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="measurements"
																id="typeFifthMeasurementX"
																className="form-control form-control-lg"
																placeholder="Fifth Measurement"
																onChange={e => setFifth_measurement(e.target.value)}
																value={fifth_measurement}
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
																id="typeFirstStepX"
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
																id="typeSecondStepX"
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
																id="typeThirdStepX"
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
																id="typeFourthStepX"
																className="form-control form-control-lg"
																placeholder="Fourth Step"
																onChange={e => setFourth_step(e.target.value)}
																value={fourth_step}
															/>
														</div>
													</div>
													<div>
														<div className="input-group-prepend" />

														<div className="email form-outline mb-4">
															<input
																type="fifth step"
																id="typeFifthStepX"
																className="form-control form-control-lg"
																placeholder="Fifth Step"
																onChange={e => setFifth_step(e.target.value)}
																value={fifth_step}
															/>
														</div>
													</div>
												</Tab>
											</Tabs>

											{formStatus.message && (
												<Alert variant={formStatus.status === "error" ? "danger" : "info"}>
													{formStatus.message}
												</Alert>
											)}

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
