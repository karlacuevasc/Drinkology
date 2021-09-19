import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileCarta } from "../component/ProfileCard";
import { ProfileNavbar } from "../component/ProfileNav";

export const Account = () => {
	return (
		<div className="">
			<ProfileNavbar />

			<div className="m-auto pb-5">
				<ProfileCarta />
			</div>
		</div>
	);
};
