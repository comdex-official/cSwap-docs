import React from "react";
import { Link } from "react-router-dom";
import DarkLogo from "../../../assets/images/svg/cSwap-dark-logo.svg";
import "./index.less";

const NavigationBar = () => {
	return (
		<>
			<div className="logo">
				<Link to="/">
				<img className="blue" src={DarkLogo} alt="Logo" width={120}/>
				</Link>
			</div>
		</>
	);
};

export default NavigationBar;