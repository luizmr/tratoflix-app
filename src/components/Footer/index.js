import React from "react";
import { FooterBase } from "./styles";
import Tratoflix from "../../assets/tratoflix.png";

function Footer() {
	return (
		<FooterBase>
			<a href="/">
				<img src={Tratoflix} alt="Logo Tratoflix" className="logo" />
			</a>
		</FooterBase>
	);
}

export default Footer;
