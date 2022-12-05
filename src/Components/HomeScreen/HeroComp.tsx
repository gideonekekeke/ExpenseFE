import React, { useEffect } from "react";
import styled from "styled-components";

import { FaPlay } from "react-icons/fa";
import axios from "axios";

const HeroComp: React.FC = () => {
	const justRead = async () => {
		await axios.get("https://event-3p90.onrender.com").then((res) => {});
	};
	useEffect(() => {
		justRead();
	}, []);

	return (
		<Container id='platform'>
			<Wrapper>
				<First>
					<h1>
						The Finance <br /> Solution for <br /> Your Business{" "}
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
						quidem rem vero nemo saepe? Vel nemo sint dignissimos velit
						consequuntur.
					</p>
					<ButtonHold>
						<Button bd='' bg='#926efc'>
							Book a Demo
						</Button>
						<Button bd='1px solid gray' bg='transparent'>
							<Icons>
								<FaPlay />
							</Icons>
							Watch video
						</Button>
					</ButtonHold>

					<Rated>
						{" "}
						<Icon></Icon> <span> Rated 4.9/5 from Transpilot</span>
					</Rated>
				</First>
				<Second>
					<HeroImage src='/assets/h2.png' />
				</Second>
			</Wrapper>
		</Container>
	);
};

export default HeroComp;

const Icons = styled.div`
	margin-right: 10px;
`;

const Wrapper = styled.div`
	margin-top: 20px;

	width: 100%;
	background-color: black;
	display: flex;
	justify-content: center;
	color: white;
	padding-bottom: 50px;

	@media screen and (max-width: 400px) {
		/* padding-left: 30px; */
		flex-direction: column-reverse;
		align-items: center;
		flex-wrap: wrap;
	}

	@media screen and (max-width: 960px) {
		/* padding-left: 30px; */
		flex-direction: column-reverse;
		align-items: center;
		flex-wrap: nowrap;
	}
`;

const HeroImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const First = styled.div`
	/* margin-top: 30px; */

	h1 {
		font-size: 50px;

		@media screen and (max-width: 960px) {
			font-size: 40px;
		}
	}

	p {
		width: 500px;

		@media screen and (max-width: 960px) {
			width: 100%;
		}
	}

	@media screen and (max-width: 960px) {
		width: 90%;
	}
`;
const Rated = styled.div`
	margin-top: 20px;
	font-size: 12px;
	display: flex;
	align-items: center;
	color: gray;
`;
const Icon = styled.div``;
const Second = styled.div`
	height: 450px;
	width: 500px;

	@media screen and (max-width: 600px) {
		width: 90%;
		height: 400px;
		/* background-color: red; */
	}
	/* background-color: red; */
`;

const ButtonHold = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 600px) {
		margin-right: 10px;
	}
`;
const Button = styled.button<{ bg: string; bd: string }>`
	/* margin-left: 10px; */
	margin-right: 10px;

	height: 40px;
	width: 150px;
	background-color: ${(props) => props.bg};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	font-size: 13px;
	color: white;
	border: ${(props) => props.bd};
	cursor: pointer;
	transition: all 350ms;

	:hover {
		transform: scale(0.98);
	}
`;

const Container = styled.div`
	/* height: 500px; */
	width: 100%;
	background-color: black;
	display: flex;
	justify-content: center;
	/* align-items: center; */
	color: white;

	@media screen and (max-width: 960px) {
		/* padding-left: 10px; */
		flex-direction: column-reverse;
		flex-wrap: nowrap;
	}
`;
