import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TrustedByComp = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		// autoplaySpeed: 5000,
		cssEase: "linear",
	};
	return (
		<Container>
			<h4>Trusted by fastest growing companies</h4>
			<br />

			<Wrapper>
				<Slider {...settings}>
					<MainImage src='/assets/t1.svg' />
					<MainImage src='/assets/t2.svg' />
					<MainImage src='/assets/t3.svg' />
					<MainImage src='/assets/t4.svg' />
					<MainImage src='/assets/t2.svg' />
					<MainImage src='/assets/t1.svg' />
				</Slider>
			</Wrapper>
		</Container>
	);
};

export default TrustedByComp;

const MainImage = styled.img`
	height: 20px;
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
