import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

const LastComp = () => {
	return (
		<Container>
			<h1>
				Empower your finance <br /> team today.
			</h1>

			<ButtonHold>
				<Button cl='white' bd='none' bg='#926efc'>
					Book a Demo
				</Button>
				<Button cl='black' bd='1px solid gray' bg='transparent'>
					<Icons>
						<FaPlay />
					</Icons>
					Watch video
				</Button>
			</ButtonHold>
		</Container>
	);
};

export default LastComp;

const Icons = styled.div`
	margin-right: 10px;
`;

const ButtonHold = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 600px) {
		margin-right: 10px;
	}
`;

const Button = styled.button<{ bg: string; bd: string; cl: string }>`
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
	color: ${(props) => props.cl};
	border: ${(props) => props.bd};
	cursor: pointer;
	transition: all 350ms;

	:hover {
		transform: scale(0.98);
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300px;
	text-align: center;
	flex-direction: column;

	h1 {
		font-size: 40px;
	}
`;
