import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

interface Iprops {
	br: string;
	bl: string;
	src: string;
}

const DownCard: React.FC<Iprops> = ({ br, bl, src }) => {
	return (
		<Card bl={bl} br={br}>
			<Ava src={src} />
			<Text>self-employed</Text>
			<p>
				Flexible and clear benefits you <br /> can run by yourseld.
			</p>

			<ButtonHold>
				<Button bd='1px solid gray' bg='transparent'>
					Make Expense Team{" "}
					<Icons>
						<FiExternalLink />
					</Icons>
				</Button>
			</ButtonHold>
		</Card>
	);
};

export default DownCard;
const Text = styled.div`
	font-size: 25px;
	font-weight: 900;
`;
const Icons = styled.div`
	margin-left: 10px;
`;

const ButtonHold = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 600px) {
		margin-right: 10px;
	}
`;
const Button = styled.button<{ bg: string; bd: string }>`
	/* margin-left: 10px; */
	margin-right: 10px;

	height: 40px;
	width: 190px;
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

const Card = styled.div<{ bl: string; br: string }>`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* background-color: red; */
	/* margin-right: 30px; */
	/* margin-left: 30px; */
	border-left: ${(props) => props.bl};
	border-right: ${(props) => props.br};
	width: 400px;
	p {
		color: gray;
	}

	@media screen and (max-width: 960px) {
		margin-bottom: 40px;
	}
`;
const Ava = styled.img`
	height: 150px;
`;
