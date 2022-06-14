import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/cocktails.css";
import { Drink } from "../component/LibraryCards";

// export const MyCocktailsInfo = props => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	return (
// 		<Container className=" therecipe text-center">
// 			<h1 className="cocktailRecipeCartaTitle">{props.name}</h1>

// 			<Card className="cocktailRecipeCarta m-auto" style={{ width: "40rem", border: "none" }}>
// 				<Card.Img variant="top" src={props.image} />
// 			</Card>

// 			<hr className="line" />
// 			<Row className="cocktailRecipeCartaTitleList">
// 				<Col> Ingredients </Col>
// 				<Col> Measurements </Col>
// 				<Col> Glassware </Col>
// 			</Row>
// 			<Row className="cocktailRecipeCartaList">
// 				<Col>{props.first_ingredient}</Col>
// 				<Col>{props.first_measurement}</Col>
// 				<Col>{store.myCocktails[params.cocktailId].glassware}</Col>
// 			</Row>
// 			<Row className="cocktailRecipeCartaList">
// 				<Col md={4}>{props.second_ingredient}</Col>
// 				<Col md={4}>{props.second_measurement}</Col>
// 			</Row>
// 			<Row className="cocktailRecipeCartaList">
// 				<Col md={4}>{props.third_ingredient}</Col>
// 				<Col md={4}>{props.third_measurement}</Col>
// 			</Row>
// 			<Row className="cocktailRecipeCartaList">
// 				<Col md={4}>{props.fourth_ingredient}</Col>
// 				<Col md={4}>{props.fourth_measurement}</Col>
// 			</Row>
// 			<Row className="cocktailRecipeCartaList">
// 				<Col md={4}>{props.fifth_ingredient}</Col>
// 				<Col md={4}>{props.fifth_measurement}</Col>
// 			</Row>
// 			<Row>
// 				<Col>
// 					<h1 className="cocktailRecipeCartaTitleInstructions text-center">Instructions</h1>
// 					<Row className="cocktailRecipeCartaList">
// 						<Col md={6}>First Step</Col>
// 						<Col md={6}>{props.first_step}</Col>
// 					</Row>
// 					<Row className="cocktailRecipeCartaList">
// 						<Col md={6}>Second Step</Col>
// 						<Col md={6}>{props.second_step}</Col>
// 					</Row>
// 					<Row className="cocktailRecipeCartaList">
// 						<Col md={6}>Third Step</Col>
// 						<Col md={6}>{props.third_step}</Col>
// 					</Row>
// 					<Row className="cocktailRecipeCartaList">
// 						<Col md={6}>Fourth Step</Col>
// 						<Col md={6}>{props.fourth_step}</Col>
// 					</Row>
// 					<Row className="cocktailRecipeCartaList">
// 						<Col md={6}>Fifth Step</Col>
// 						<Col md={6}>{props.fifth_step}</Col>
// 					</Row>
// 					<Container>
// 						<Button className="mr-2" href="/profile" variant="dark" size="lg">
// 							Go back
// 						</Button>
// 					</Container>
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// };

// MyCocktailsInfo.propTypes = {
// 	name: PropTypes.string,
// 	image: PropTypes.string,
// 	id: PropTypes.string,
// 	i: PropTypes.string,
// 	alcohol_content: PropTypes.string,
// 	glassware: PropTypes.string,
// 	garnish: PropTypes.string,
// 	first_step: PropTypes.string,
// 	second_step: PropTypes.string,
// 	third_step: PropTypes.string,
// 	fourth_step: PropTypes.string,
// 	fifth_step: PropTypes.string,
// 	first_ingredient: PropTypes.string,
// 	second_ingredient: PropTypes.string,
// 	third_ingredient: PropTypes.string,
// 	fourth_ingredient: PropTypes.string,
// 	fifth_ingredient: PropTypes.string,
// 	first_measurement: PropTypes.string,
// 	second_measurement: PropTypes.string,
// 	third_measurement: PropTypes.string,
// 	fourth_measurement: PropTypes.string,
// 	fifth_measurement: PropTypes.string
// };

export const MyCocktailsInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [currentCocktail, setCurrentCocktail] = useState(null);
	useEffect(async () => {
		setCurrentCocktail(await actions.getSingleCocktail(params.cocktailId));
	}, []);
	//We always need to check for null, for all variables that are being set by and API call//
	if (currentCocktail === null || currentCocktail === undefined) {
		return <Image className="mx-auto d-block" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />;
	}
	return (
		<Container className=" therecipe text-center">
			<h1 className="cocktailRecipeCartaTitle">{currentCocktail.name}</h1>

			<Card className="cocktailRecipeCarta m-auto" style={{ width: "40rem", border: "none" }}>
				<Card.Img variant="top" src={currentCocktail.image} />
			</Card>

			<hr className="line" />
			<Row className="cocktailRecipeCartaTitleList">
				<Col> Ingredients </Col>
				<Col> Measurements </Col>
				<Col> Glassware </Col>
				<Col> Garnishes </Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col>{currentCocktail.first_ingredient}</Col>
				<Col>{currentCocktail.first_measurement}</Col>
				<Col>{currentCocktail.glassware}</Col>
				<Col>{currentCocktail.garnish}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.second_ingredient}</Col>
				<Col md={4}>{currentCocktail.second_measurement}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.third_ingredient}</Col>
				<Col md={4}>{currentCocktail.third_measurement}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.fourth_ingredient}</Col>
				<Col md={4}>{currentCocktail.fourth_measurement}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.fifth_ingredient}</Col>
				<Col md={4}>{currentCocktail.fifth_measurement}</Col>
			</Row>
			<Row>
				<Col>
					<h1 className="cocktailRecipeCartaTitleInstructions text-center">Instructions</h1>
					<Row className="cocktailRecipeCartaList">
						<Col md={6}>First Step</Col>
						<Col md={6}>{currentCocktail.first_step}</Col>
					</Row>
					<Row className="cocktailRecipeCartaList">
						<Col md={6}>Second Step</Col>
						<Col md={6}>{currentCocktail.second_step}</Col>
					</Row>
					<Row className="cocktailRecipeCartaList">
						<Col md={6}>Third Step</Col>
						<Col md={6}>{currentCocktail.third_step}</Col>
					</Row>
					<Row className="cocktailRecipeCartaList">
						<Col md={6}>Fourth Step</Col>
						<Col md={6}>{currentCocktail.fourth_step}</Col>
					</Row>
					<Row className="cocktailRecipeCartaList">
						<Col md={6}>Fifth Step</Col>
						<Col md={6}>{currentCocktail.fifth_step}</Col>
					</Row>
					<Container>
						<Button className="mr-2" href="/profile" variant="dark" size="lg">
							Go back
						</Button>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};
