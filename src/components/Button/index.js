import styled from "styled-components";
import "../../index.css";

const Button = styled.button`
	background: transparent;
	color: var(--white);
	border: 1px solid var(--white) !important;
	box-sizing: border-box;
	cursor: pointer;
	padding: 16px 24px;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	outline: none;
	border-radius: 5px;
	text-decoration: none;
	display: inline-block;
	transition: opacity 0.3s ease-in-out;

	&:hover {
		opacity: 0.5;
		cursor: pointer !important;
	}
`;

export default Button;
