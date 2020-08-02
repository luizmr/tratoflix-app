import styled from "styled-components";

export const VideoCardContainer = styled.a`
	border: 2px solid;
	border-radius: 4px;
	text-decoration: none;
	overflow: hidden;
	cursor: pointer;
	color: white;
	flex: 0 0 298px;
	width: 298px;
	height: 197px;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
		${({ url }) => `url(${url})`};
	background-size: cover;
	background-position: center;

	border-radius: 10px;
	position: relative;
	display: flex;
	align-items: flex-end;
	padding: 16px;

	&:hover,
	&:focus {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			${({ url }) => `url(${url})`};
		background-size: cover;
		background-position: center;
	}

	&:hover h4 {
		visibility: visible;
		opacity: 1;
	}

	&:not(:first-child) {
		margin-left: 20px;
	}
`;

export const Title = styled.h4`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -100%) scale(1);
	text-align: center;
	z-index: 10;
	color: #fff;
	visibility: hidden;

	transition: transform 0.3s ease-in;

	&:hover {
		transform: translate(-50%, -100%) scale(1.2);
	}
`;
