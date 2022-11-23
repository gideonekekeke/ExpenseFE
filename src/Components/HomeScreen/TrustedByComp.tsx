import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TrustedByComp = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		// autoplaySpeed: 5000,
		cssEase: "linear",

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Container id='company'>
			<h4>Trusted by fastest growing companies</h4>
			<br />

			<Wrapper>
				<Slider {...settings}>
					<MainImage src='/assets/company/1.png' />
					<MainImage src='/assets/company/2.svg' />
					<MainImage src='/assets/company/3.svg' />
					<MainImage src='/assets/company/4.svg' />
					<MainImage src='/assets/company/5.svg' />
					<MainImage src='/assets/company/8.png' />
				</Slider>
			</Wrapper>
		</Container>
	);
};

export default TrustedByComp;

const MainImage = styled.img`
	height: 40px;
	object-fit: contain;
	color: white;
	filter: grayscale(1);

	@media screen and (max-width: 960px) {
		height: 30px;
	}
`;

const ButtonHold = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;

const Button = styled.div<{ wd: string; bd: string; bg: string; cl: string }>`
	height: 40px;
	width: ${(props) => props.wd};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.bg};
	border: ${(props) => props.bd};
	border-radius: 50px;
	margin-left: 20px;
	color: ${(props) => props.cl};
	cursor: pointer;

	:hover {
		transform: scale(0.97);
		transition: all 350ms;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	margin-top: 40px;
	padding-bottom: 30px;

	h1 {
		font-size: 40px;
		font-weight: 900;
	}

	p {
		width: 80%;
	}
`;
