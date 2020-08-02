import React from "react";
import { FooterBase } from "./styles";
import Tratoflix from "../../assets/tratoflix.png";

function Footer() {
	return (
		<FooterBase>
			<a href="/">
				<img src={Tratoflix} alt="Logo Celoflix" className="logo" />
			</a>
			<p>
				Orgulhosamente criado durante a{" "}
				<a href="https://www.alura.com.br/">Imersão React da Alura</a>
			</p>
		</FooterBase>
	);
}

export default Footer;
