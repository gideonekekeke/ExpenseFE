import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

const Testimonial = () => {
	return (
		<Container>
			<Wrapper>
				<First>
					<h4>TESTIMONIALS</h4>
					<h1>
						What our customers <br /> say it best.
					</h1>
					<p>
						Cloudwise is trusted by the fastes-growing companies that focus on
						financial management. here they have to say about us.
					</p>
					<ButtonHold>
						<Button bd='1px solid gray' bg='transparent'>
							Make Expense Team{" "}
							<Icons>
								<FiExternalLink />
							</Icons>
						</Button>
					</ButtonHold>
				</First>
				<Second>
					<HeroImage src='/assets/cus.png' />
				</Second>
			</Wrapper>
		</Container>
	);
};

export default Testimonial;

const Icons = styled.div`
	margin-left: 10px;
`;

const Wrapper = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
	color: black;

	align-items: center;
	/* padding-bottom: 50px; */
	flex-wrap: wrap;

	@media screen and (max-width: 960px) {
		/* padding-left: 30px; */
		flex-direction: column-reverse;
		align-items: center;
	}
`;

const HeroImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const First = styled.div`
	/* margin-top: 30px; */

	h4 {
		color: #926efc;
	}

	h2 {
		font-size: 30px;

		@media screen and (max-width: 960px) {
			font-size: 40px;
		}
	}

	h1 {
		font-size: 40px;
		@media screen and (max-width: 960px) {
			font-size: 30px;
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
	/* margin-right: 100px; */

	@media screen and (max-width: 600px) {
		width: 90%;
		height: 300px;
		/* background-color: red; */
		margin-right: 0;
		margin-left: 0;
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
	width: 170px;
	background-color: ${(props) => props.bg};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	font-size: 13px;
	color: black;
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

	display: flex;
	justify-content: center;
	align-items: center;
	color: black;

	flex-wrap: wrap;
	padding-bottom: 50px;
	background-color: white;

	@media screen and (max-width: 960px) {
		/* padding-left: 10px; */
		flex-direction: column-reverse;
	}
`;
