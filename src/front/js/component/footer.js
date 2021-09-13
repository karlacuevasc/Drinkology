import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import LogoWhite from "../../img/logo(white).png";
import "../../styles/footer.scss";

export const Footer = () => {
	return (
		<div className="footerParent">
			<div className="footerBackground">
				<div className=" text-white small">
					<Row>
						<Col sm={4}>
							<div clasName="col-md-5 col-lg-4 d-flex flex-column justify-content-between">
								<img src={LogoWhite} className="logo" />
							</div>
						</Col>
						<Col sm={4} />
						<Col sm={4} className="footerCompanySection">
							<div>
								<h1 className="company">Company</h1>
							</div>
							<div>
								<Link className="aboutuslink" to="/aboutus">
									<h5 className="about">About</h5>
								</Link>
								<Link className="contactlink" to="/contact">
									<h5 className="contact">Contact</h5>
								</Link>
							</div>
						</Col>
					</Row>
					{/* <Row>
						<Col>
						<h1>Website by Luis Furlan and Karla Cuevas</h1>
						</Col>
					</Row> */}
				</div>
			</div>
		</div>
	);
};
