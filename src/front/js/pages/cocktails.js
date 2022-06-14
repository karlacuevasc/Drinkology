import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/cocktails.css";
import { Drink } from "../component/LibraryCards";

export const CocktailsInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [currentCocktail, setCurrentCocktail] = useState(null);
	useEffect(async () => {
		setCurrentCocktail(await actions.getCocktailByID(params.cocktailId));
	}, []);
	//We always need to check for null, for all variables that are being set by and API call//
	if (currentCocktail === null || currentCocktail === undefined) {
		return <Image className="mx-auto d-block" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />;
	}
	return (
		<Container className=" therecipe text-center">
			<h1 className="cocktailRecipeCartaTitle">{currentCocktail.strDrink}</h1>

			<Card className="cocktailRecipeCarta m-auto" style={{ width: "40rem", border: "none" }}>
				<Card.Img variant="top" src={currentCocktail.strDrinkThumb} />
			</Card>

			<hr className="line" />
			<Row className="cocktailRecipeCartaTitleList">
				<Col>Ingredients</Col>
				<Col> Measurements</Col>
				<Col> Glassware </Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col>{currentCocktail.strIngredient1}</Col>
				<Col>{currentCocktail.strMeasure1}</Col>
				<Col>{currentCocktail.strGlass}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient2}</Col>
				<Col md={4}>{currentCocktail.strMeasure2}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient3}</Col>
				<Col md={4}>{currentCocktail.strMeasure3}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient4}</Col>
				<Col md={4}>{currentCocktail.strMeasure4}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient5}</Col>
				<Col md={4}>{currentCocktail.strMeasure5}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient6}</Col>
				<Col md={4}>{currentCocktail.strMeasure6}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient7}</Col>
				<Col md={4}>{currentCocktail.strMeasure7}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient8}</Col>
				<Col md={4}>{currentCocktail.strMeasure8}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient9}</Col>
				<Col md={4}>{currentCocktail.strMeasure9}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient10}</Col>
				<Col md={4}>{currentCocktail.strMeasure10}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient10}</Col>
				<Col md={4}>{currentCocktail.strMeasure10}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient11}</Col>
				<Col md={4}>{currentCocktail.strMeasure12}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient13}</Col>
				<Col md={4}>{currentCocktail.strMeasure13}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient14} </Col>
				<Col md={4}>{currentCocktail.strMeasure14}</Col>
			</Row>
			<Row className="cocktailRecipeCartaList">
				<Col md={4}>{currentCocktail.strIngredient15}</Col>
				<Col md={4}>{currentCocktail.strMeasure15}</Col>
			</Row>
			<Row>
				<Col>
					<h1 className="cocktailRecipeCartaTitleInstructions text-center">Instructions</h1>
					<p className="cocktaiInstructionsList text-center">{currentCocktail.strInstructions}</p>
					<Container>
						<Button className="mr-2" href="/profile" variant="dark" size="lg">
							Go back
						</Button>
						<Button
							size="lg"
							className="heart"
							variant="danger"
							onClick={() => actions.favoritesInfo(currentCocktail)}>
							<i className="fas fa-heart" />
						</Button>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};
