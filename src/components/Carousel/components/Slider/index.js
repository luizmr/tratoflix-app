import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const Container = styled.ul`
	padding: 0;
	margin: 0;
	.slick-prev,
	.slick-next {
		z-index: 50;
		top: 0;
		bottom: 0;
		margin: auto;
		width: 30px;
		height: 30px;
		transform: initial;
		&:before {
			font-size: 30px;
		}
	}

	.slick-prev {
		left: 0;
	}
	.slick-next {
		right: 16px;
	}
`;

export const SliderItem = styled.li`
	margin-right: 16px;
	img {
		margin: 16px;
		width: 298px;
		height: 197px;
		object-fit: cover;
	}
`;

const PrevArrow = styled.div`
	display: block;

	&:hover::before {
		opacity: 1 !important;
	}
	&:before {
		position: absolute;
		top: 50%;
		left: -110%;
		transform: translate(0, -25%);
		vertical-align: middle;
		background-size: 46px;
		opacity: 0.8 !important;
		transition: all 0.3s ease-in-out;
	}
`;

const NextArrow = styled.div`
	display: block;

	&:hover::before {
		opacity: 1 !important;
	}
	&:before {
		position: absolute;
		top: 50%;
		right: -200%;
		transform: translate(0, -25%);
		vertical-align: middle;
		background-size: 46px;
		opacity: 0.8 !important;
		transition: all 0.3s ease-in-out;
		margin-right: 10px;
	}
`;

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<NextArrow
			as="div"
			className={className}
			style={{ ...style }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<PrevArrow
			as="div"
			className={className}
			// style={{
			// 	...style,
			// }}
			onClick={onClick}
		/>
	);
}

const Slider = ({ children }) => (
	<Container>
		<SlickSlider
			{...{
				dots: false,
				infinite: true,
				speed: 300,
				centerMode: false,
				variableWidth: true,
				adaptiveHeight: true,
				nextArrow: <SampleNextArrow />,
				prevArrow: <SamplePrevArrow />,
			}}
		>
			{children}
		</SlickSlider>
	</Container>
);

export default Slider;
