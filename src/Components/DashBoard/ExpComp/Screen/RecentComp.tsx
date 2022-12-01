import React from "react";
import styled from "styled-components";
import RecentData from "./RecentData";

const RecentComp = () => {
	return (
		<Container>
			<Card>
				<Top>
					<Show>Recent Invoices</Show>
					<Search>
						<Button>View All</Button>
					</Search>
				</Top>
				<Wrap>
					<Mid>
						<Yellow></Yellow>
					</Mid>
					<Hold>
						<Cash>
							<Circle></Circle>
							<Text>Paid</Text>
						</Cash>
						<Cash>
							<Circle></Circle>
							<Text>Unpaid</Text>
						</Cash>
						<Cash>
							<Circle></Circle>
							<Text>Overdue</Text>
						</Cash>
						<br />
						<Cash>
							<Circle></Circle>
							<Text>Draft</Text>
						</Cash>
					</Hold>
				</Wrap>
				<Date>
					<RecentData />
				</Date>
			</Card>
			<Card>
				<Top>
					<Show>Recent Invoices</Show>
					<Search>
						<Button>View All</Button>
					</Search>
				</Top>
				<Wrap>
					<Mid>
						<Yellow></Yellow>
					</Mid>
					<Hold>
						<Cash>
							<Circle></Circle>
							<Text>Paid</Text>
						</Cash>
						<Cash>
							<Circle></Circle>
							<Text>Unpaid</Text>
						</Cash>
						<Cash>
							<Circle></Circle>
							<Text>Overdue</Text>
						</Cash>
						<br />
						<Cash>
							<Circle></Circle>
							<Text>Draft</Text>
						</Cash>
					</Hold>
				</Wrap>
				<Date>
					<RecentData />
				</Date>
			</Card>
		</Container>
	);
};

export default RecentComp;

const Date = styled.div`
	/* position: relative; */
	width: 90%;
	/* position: relative; */
	/* background-color: chartreuse; */
	/* padding: 0px 10px; */
`;
const Text = styled.div`
	font-weight: 700;
	color: #939396;
`;
const Circle = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: green;
	margin-right: 10px;
`;
const Cash = styled.div`
	display: flex;
	margin: 5px;
`;
const Hold = styled.div`
	width: 90%;
	/* background-color: gold; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;
const Wrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Card = styled.div`
	width: 470px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: white;
	margin: 8px;
	font-size: 12px;
	@media (max-width: 1270px) {
		width: 460px;
	}
	@media (max-width: 1250px) {
		width: 400px;
	}
	@media (max-width: 900px) {
		width: 100%;
	}
`;
const Carded = styled.div`
	width: 350px;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: white;
	margin: 8px;
	@media (max-width: 7680px) {
		width: 100%;
	}
`;
const Container = styled.div`
	width: 98%;
	min-height: 360px;
	display: flex;
	flex-wrap: wrap;

	/* background-color: gold; */
	@media (max-width: 768px) {
		width: 100%;
	}

	justify-content: center;
`;
const Input = styled.input`
	border: 0px;
	outline: none;
`;
const Search = styled.div`
	display: flex;
	align-items: center;
	border-radius: 5px;
	margin-right: 10px;
`;
const Show = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 700;
	font-size: 20px;
	color: #697b90;
	margin-left: 10px;
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* padding: 10px 20px; */
	width: 100%;
	/* width: 95%; */
	border-bottom: 1px solid gray;
	margin-bottom: 20px;
	/* box-shadow: ;v */
	/* background-color: red; */
`;
const Button = styled.div`
	border: 1px solid #7638ff;
	outline: none;
	/* padding: 10px 15px; */
	padding: 10px 20px;
	margin: 2px;
	background-color: transparent;
	color: #7638ff;
	border-radius: 5px;
	font-weight: 500;
	cursor: pointer;
	margin-bottom: 10px;
`;
const Mid = styled.div`
	width: 90%;
	height: 5px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	border-radius: 10px;
	margin-bottom: 15px;
`;
const Yellow = styled.div`
	background-color: orange;
	width: 60%;
	height: 100%;
	border-radius: 5px;
`;
