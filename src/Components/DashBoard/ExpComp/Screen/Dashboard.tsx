import React from "react";
import styled from "styled-components";
import ChartComp from "./ChartComp";
import RecentComp from "./RecentComp";
import { FaDollarSign, FaFilePdf } from "react-icons/fa";
import { MdGroup, MdInventory } from "react-icons/md";

const Dashboard: React.FC = () => {
	return (
		<div>
			<Container>
				<Main>
					<Wrapper>
						<Top>
							<Box bx='gold'>
								<Boxhold>
									<Ups>
										<Texxt>
											<H1>Income</H1>
											<Number>#94,0000</Number>
										</Texxt>
									</Ups>

									<Down>
										<h1 style={{ color: "gold" }}>3.7%</h1> since last week
									</Down>
								</Boxhold>
							</Box>
							<Box bx='skyblue'>
								<Boxhold>
									<Ups>
										<Texxt>
											<H1>Expense</H1>
											<Number>#94,0000</Number>
										</Texxt>
									</Ups>

									<Down>
										<h1>3.7%</h1> since last week
									</Down>
								</Boxhold>
							</Box>
							<Box bx='purple'>
								<Boxhold>
									<Upd>
										<Texxt>
											<H1>Sales</H1>
											<Number>#95,0000</Number>
										</Texxt>
									</Upd>

									<Down>
										<h2>4.5%</h2> since last week
									</Down>
								</Boxhold>
							</Box>
							<Box bx='red'>
								<Boxhold>
									<Upg>
										<Texxt>
											<H1>Lost</H1>
											<Number>#78,0000</Number>
										</Texxt>
									</Upg>

									<Down>
										<h3>2.5%</h3> since last week
									</Down>
								</Boxhold>
							</Box>
						</Top>
						<Middle>
							<ChartComp />
						</Middle>
						<Middle>
							<RecentComp />
						</Middle>
					</Wrapper>
				</Main>
			</Container>
		</div>
	);
};

export default Dashboard;
// const Container = styled.div``

const Top = styled.div`
	width: 100%;
	min-height: 150px;
	/* background-color: gold; */

	display: flex;
	justify-content: center;
	align-items: center;
	/* flex-direction: row; */
	flex-wrap: wrap;
	margin-top: 41px;
	/* background-color: blue; */
`;
const Box = styled.div<{ bx: string }>`
	width: 230px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: rgb(255, 255, 255);
	margin: 5px;
	border-bottom: 2px solid ${(props) => props.bx};

	@media (max-width: 1245px) {
		width: 45%;
		margin: 7px;
	}
	@media (max-width: 425px) {
		width: 95%;
		margin: 7px;
	}
`;
const Boxhold = styled.div`
	width: 85%;
	height: 80%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;
const Up = styled.div`
	width: 85%;
	height: 55px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;
const Ups = styled.div`
	width: 75%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;
const Upd = styled.div`
	width: 68%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;
const Upg = styled.div`
	width: 70%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;

const Texxt = styled.div`
	height: 80%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;
const H1 = styled.div`
	font-size: 16px;
	font-weight: bold;
`;
const Number = styled.div`
	font-size: 16px;
`;
const Mid = styled.div`
	width: 100%;
	height: 5px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	border-radius: 10px;
`;
const Skyblue = styled.div`
	background-color: skyblue;
	width: 80%;
	height: 100%;
`;
const Red = styled.div`
	background-color: red;
	width: 50%;
	height: 100%;
`;
const Purple = styled.div`
	width: 30%;
	background-color: purple;
	height: 100%;
`;
const Down = styled.div`
	color: black;
	font-size: 13px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	width: 70%;

	span {
		color: yellow;
		font-size: 13px;
		font-weight: bold;
	}
	h1 {
		color: skyblue;
		font-size: 13px;
		font-weight: bold;
	}
	h2 {
		color: red;
		font-size: 13px;
		font-weight: bold;
	}
	h3 {
		color: purple;
		font-size: 13px;
		font-weight: bold;
	}
`;
const Middle = styled.div`
	display: flex;

	justify-content: center;
`;

const Wrapper = styled.div`
	width: 90%;
	/* min-height: 100%; */
	/* background-color: red; */
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-top: 20px;
	/* margin-left: 180px; */

	@media (max-width: 1100px) {
		margin-left: 200px;
	}
	@media (max-width: 1000px) {
		margin-left: 0px;
		width: 98%;
	}
`;

const Container = styled.div`
	/* width: 100%; */
	width: calc(100vw - 190px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	align-items: flex-end;
	background-color: #f8f9fa;
	/* background-color: gold; */
	overflow: hidden;
	position: absolute;
	right: 0px;
	top: 50px;

	@media screen and (max-width: 1100px) {
		width: 95%;
	}
	@media screen and (max-width: 1005px) {
		width: 100%;
	}

	/* background-color: #352b1e; */
`;

const Main = styled.div`
	/* background-color: blue; */
	width: 100%;
	/* height: 92%; */

	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	/* align-items: center; */

	@media (max-width: 768px) {
		width: 100%;
	}
`;
