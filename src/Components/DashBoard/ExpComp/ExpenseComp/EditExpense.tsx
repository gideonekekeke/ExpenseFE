import axios from "axios";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userDecode } from "../../../Global/GlobalState";

const url = "https://event-3p90.onrender.com";

interface iData {
	_id: string;
	submittedBy: string;
	image: string;
	totalExpense: number;
	totalSales: number;
	hubName: string;
	date: string;
	profit: number;
	detail: [];
	item?: string;
	cost?: number;
	status: string | undefined;
	note: string;
}

const EditExpense: React.FC = () => {
	const { id } = useParams();
	const user = useRecoilValue(userDecode);
	const [sales, setSales] = useState<iData[]>([]);
	const [data, setData] = useState<iData>();

	const getAll = async () => {
		const newURL = `${url}/api/sales/${id}/sales`;
		await axios.patch(newURL).then((res) => {
			setSales(res?.data?.data?.detail);
			setData(res?.data?.data);
		});
	};
	useEffect(() => {
		getAll();
	}, []);
	return (
		<Container>
			<Header>
				<Hold>
					<Title>Expense</Title>
					<Content>
						Dashboard /Expense / <span>View Details</span>
					</Content>
				</Hold>
			</Header>
			<Wrapper>
				<Left>
					<Div>Sales, Expenses and Cost</Div>
					{sales?.map((props) => (
						<CardHold>
							{props?.status === "expense" ? (
								<ImageBox bg='t'>
									{props?.status!.charAt(0)?.toUpperCase()}
								</ImageBox>
							) : (
								<ImageBox bg=''>
									{props?.status!.charAt(0)?.toUpperCase()}
								</ImageBox>
							)}

							<TopButtom>
								<ProductTitle>{props?.item}</ProductTitle>
								<Buttom>
									<Price>
										{props.status === "expense" ? (
											<div style={{ color: "red" }}>
												₦{numeral(props.cost).format("0,0")}
											</div>
										) : (
											<div style={{ color: "green" }}>
												₦{numeral(props.cost).format("0,0")}
											</div>
										)}
									</Price>
								</Buttom>
							</TopButtom>
						</CardHold>
					))}
				</Left>

				<Right>
					<Div>Note:</Div>
					<Text value={data?.note} />
				</Right>
				<br />

				<p style={{ color: "gray" }}>
					This is the outcome of all the total cost and expense made today.
				</p>
				<span>
					<span>Total Sale :</span>{" "}
					<span style={{ fontWeight: "bold" }}>#{data?.totalSales}</span>
				</span>
				<span>
					<span>Total Expense :</span>{" "}
					<span style={{ fontWeight: "bold" }}># {data?.totalExpense}</span>
				</span>
			</Wrapper>
		</Container>
	);
};

export default EditExpense;

const CardHold = styled.div`
	display: flex;
	padding: 10px 0;
`;
const ImageBox = styled.div<{ bg: string }>`
	height: 40px;
	width: 40px;
	background-color: ${({ bg }) => (bg ? "red" : "green")};
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 0 20px;
	border-radius: 50%;
	font-size: 25px;
	font-weight: 800;
	color: white;

	img {
		width: 40px;
		object-fit: contain;
	}
`;
const TopButtom = styled.div`
	width: 75%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
	}
`;
const ProductTitle = styled.div`
	font-size: 15px;
	font-weight: 800;
	margin-right: 20px;
`;
const Buttom = styled.div`
	display: flex;
	align-items: center;
`;
const Price = styled.div`
	font-size: 15px;
	color: darkorange;
	font-weight: bold;
	margin-right: 20px;
`;

const Cont = styled.div`
	width: 90%;
	height: 40px;
	border: 1px solid lightgray;
	border-radius: 5px;
	margin-bottom: 20px;
	background-color: #aca5a5;
	display: flex;
	align-items: center;
	padding-left: 10px;
	font-weight: 700;
`;
const Input = styled.input`
	width: 90%;
	height: 40px;
	border: 1px solid lightgray;
	border-radius: 5px;
	outline: none;
	margin-bottom: 20px;
`;
const Button = styled.button`
	/* padding: 10px 20px; */
	border: 0px;
	outline: none;
	color: white;
	font-weight: 700;
	background-color: blue;
	width: 150px;
	height: 40px;
	border-radius: 5px;
	/* float: right; */
	margin-left: 160px;
`;
const Right = styled.div`
	flex: 1;
	margin: 10px;
	display: flex;
	/* align-items: flex-end; */
	flex-direction: column;
`;
const Text = styled.textarea`
	width: 90%;
	height: 150px;
	border: 1px solid lightgray;
	border-radius: 5px;
`;
const Select = styled.select`
	width: 90%;
	margin-bottom: 20px;

	height: 40px;
	border: 1px solid lightgray;
	border-radius: 5px;
	outline: none;
`;
const Div = styled.div`
	font-size: 20px;
	font-weight: 700;
	color: #6c6666;
	margin-bottom: 12px;
`;
const Left = styled.div`
	flex: 1;
	margin: 10px;
`;
const Content = styled.div`
	color: #18191a;
	font-weight: 500;

	span {
		color: #6c6666;
	}
`;
const Title = styled.div`
	font-size: 25px;
	font-weight: 600;
	color: #18191a;
`;
const Hold = styled.div`
	margin: 30px 0px;
`;
const Header = styled.div`
	width: 90%;
	max-width: 1500px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Wrapper = styled.div`
	width: 90%;
	max-width: 1500px;

	background-color: white;
	padding: 20px 20px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	display: flex;
	flex-direction: column;

	@media (max-width: 800px) {
		flex-direction: column;
	}
	/* overflow-x: scroll; */
`;
const Container = styled.div`
	background-color: #f7f8f9;
	width: calc(100vw - 250px);
	/* width: 100%; */
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	overflow: hidden;
	position: absolute;
	right: 0px;
	top: 70px;

	@media screen and (max-width: 1005px) {
		width: 100%;
	}
`;
