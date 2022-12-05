import React from "react";
import styled from "styled-components";
import BoostProps from "./BoostProps";

const BoostingComp: React.FC = () => {
	return (
		<Container id='solution'>
			<h2>
				Boosting businesses. Today <br /> and tomorrow.
			</h2>
			<br />
			<br />
			<BoostProps
				title='Team Expense Management'
				src='/assets/5.png'
				ml=''
				mr='60px'
				fd='row-reverse'
				desc='Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.'
			/>
			<BoostProps
				title='Automated Bookeeping'
				src='/assets/7.png'
				ml='30px'
				mr=''
				fd=''
				desc="Take the pain out if bookeepin! wave goodbye to mountains of paperwork and endless email reminders.There's now a new way of accounting."
			/>
		</Container>
	);
};

export default BoostingComp;

const Container = styled.div`
	/* height: 500px; */
	width: 100%;
	background: white;

	padding-top: 30px;
	margin-top: 20px;

	h2 {
		text-align: center;
		font-size: 30px;

		@media screen and (max-width: 960px) {
			font-size: 20px;
		}
		/* margin-top: 30px; */
	}
`;
