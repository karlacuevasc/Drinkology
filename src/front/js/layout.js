import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Account } from "./pages/profile";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Aboutus } from "./pages/AboutUs";
import { Library } from "./pages/library";
import { SignOut } from "./pages/signout";
import { CocktailsInfo } from "./pages/cocktails";
import injectContext from "./store/appContext";

import { NavBar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/cocktails/:cocktailId">
							<CocktailsInfo />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/library">
							<Library />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/about">
							<Aboutus />
						</Route>
						<Route excat path="/contact">
							<Contact />
						</Route>
						<Route excat path="/profile">
							<Account />
						</Route>
						<Route excat path="/signout">
							<SignOut />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
