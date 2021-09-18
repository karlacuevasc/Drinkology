import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Alcohol from "../../img/alcohol.jpeg";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Register } from "../component/Register";

import "../../styles/signup.scss";

export const Signup = () => {
	return <Register />;
};
