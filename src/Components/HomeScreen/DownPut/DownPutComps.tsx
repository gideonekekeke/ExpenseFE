import React from "react";
import styled from "styled-components";
import DownCard from "./DownCard";

const DownPutComps: React.FC = () => {
	return (
		<Cont id='resource'>
			<br />
			<br />
			<br />
			<h3>From Whom</h3>

			<h1>
				Whatever your size we're <br /> the right fit.
			</h1>

			<Wrapper>
				<DownCard src='/assets/9.png' bl='' br='' />
				<DownCard
					src='/assets/11.png'
					bl='1px solid gray'
					br='1px solid gray'
				/>
				<DownCard src='/assets/10.png' bl='' br='' />
			</Wrapper>
		</Cont>
	);
};

export default DownPutComps;

const Wrapper = styled.div`
	display: flex;
	margin-top: 50px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;
const Cont = styled.div`
	/* height: 500px; */
	width: 100%;
	background-color: #090909;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-bottom: 100px;

	h1 {
		text-align: center;
		font-size: 50px;
		margin-bottom: 0px;
		margin-top: 0px;

		@media screen and (max-width: 600px) {
			font-size: 20px;
		}
		/* margin-top: 30px; */
	}

	h3 {
		color: #926efc;
	}
`;
