import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css";
import rick from "../../assets/rick.png";

const NotFound = styled.div`
	min-height: calc(100vh - var(--bodyPaddingTop));
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: #000;
	color: #fff;
	img {
		max-width: 600px;
		margin-bottom: 2rem;
		border-radius: 1rem;
	}
	@media (max-width: 500px) {
		img {
			max-width: 300px;
		}
	}
`;

export default class notFound extends Component {
	render() {
		return (
			<NotFound>
				<h1>Página não encontrada!</h1>
				<img src={rick} alt="rick" />
				<Link to="/" className="link">
					Ir para home
				</Link>
			</NotFound>
		);
	}
}
