import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

export const CocktailsRecipeCard = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="main">
			<div className="d-flex">
				<div>
					<img
						className="charimage"
						src="https://lumiere-a.akamaihd.net/v1/images/quasar-fire-class-cruiser-carrier-169_26592dcb.jpeg?region=0%2C0%2C1560%2C878&width=1536"
					/>
				</div>
				<div>
					<h1>{params.theid}</h1>
					<h4 className="chartext">
						Sed ut perspiciatis unde onis iste natus error sit voluptatem accusantium doloremque laudantium,
						totam rem aperiam, aeque ipsa quae ab illoinventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsma voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi{" "}
					</h4>
				</div>
			</div>
			<hr className="line" />
			<Container>
				<Row>
					{/* <Col sm={2}><div className="col-6 col-sm-2">{store.starships[params.theid].vehicle_class || "NA"}</div></Col> */}
					<Col sm={2} />
					<Col sm={2} />
					<Col sm={2} />
					<Col sm={2} />
					<Col sm={2} />
					<Col sm={2} />
				</Row>
				<Row>
					<Col sm={2} />
					<Col sm={2} />
					<Col sm={2} />
					<Col sm={2} />
					<Col sm={2} />
					<Col sm={2} />
				</Row>
			</Container>
		</div>
	);
};

CocktailsRecipeCard.propTypes = {
	match: PropTypes.object
};
