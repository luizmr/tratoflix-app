import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tratoflix from "../../assets/tratoflix.png";

import Button from "../Button/index";
import "./menu.css";

export default class Menu extends Component {
	render() {
		return (
			<nav className="menu">
				<Link to="/">
					<img src={Tratoflix} alt="logo" className="logo" />
				</Link>
				<Button as={Link} className="buttonLink" to="/cadastro/video">
					Novo vídeo
				</Button>
			</nav>
		);
	}
}
