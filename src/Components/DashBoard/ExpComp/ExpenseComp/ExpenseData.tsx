import React from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const ExpenseData = () => {
	return (
		<Container>
			<Buttom>
				<Head>
					<Th>
						<HoldHead>
							Category{" "}
							<span>
								<FaLongArrowAltUp />
								<FaLongArrowAltDown color='lightgray' />
							</span>
						</HoldHead>
					</Th>
					<Th>
						<HoldHead>
							Customer{" "}
							<span>
								<FaLongArrowAltUp color='lightgray' />
								<FaLongArrowAltDown color='lightgray' />
							</span>
						</HoldHead>
					</Th>
					<Th>
						<HoldHead>
							Expense Date{" "}
							<span>
								<FaLongArrowAltUp color='lightgray' />
								<FaLongArrowAltDown color='lightgray' />
							</span>
						</HoldHead>
					</Th>
					<Th>
						<HoldHead>
							Notes{" "}
							<span>
								<FaLongArrowAltUp color='lightgray' />
								<FaLongArrowAltDown color='lightgray' />
							</span>
						</HoldHead>
					</Th>
					<Th>
						<HoldHead>
							Amount{" "}
							<span>
								<FaLongArrowAltUp color='lightgray' />
								<FaLongArrowAltDown color='lightgray' />
							</span>
						</HoldHead>
					</Th>
					<Th>
						<HoldHead>
							Status{" "}
							<span>
								<FaLongArrowAltUp color='lightgray' />
								<FaLongArrowAltDown color='lightgray' />
							</span>
						</HoldHead>
					</Th>
					<Th>
						<HoldHead>
							Action{" "}
							<span>
								<FaLongArrowAltUp color='lightgray' />
								<FaLongArrowAltDown color='lightgray' />
							</span>
						</HoldHead>{" "}
					</Th>
				</Head>
				<Body>
					<Td>Advertising</Td>
					<Td>
						<UserHold>
							<span>
								<Image />
							</span>
							Barbara Moore
						</UserHold>
					</Td>
					<Td>18 Nov 2020</Td>
					<Td>This is now approved...</Td>
					<Td>$22.2 </Td>
					<Td>
						<Button bd='' cl='ff'>
							Approved
						</Button>{" "}
					</Td>
					<Td>
						<Hold>
							<NavLink to='/editExpense' style={{ textDecoration: "none" }}>
								<Button bd='fff' cl='ff'>
									<span>
										<FaRegEdit />
									</span>
									Edit
								</Button>
							</NavLink>
							<Button bd='ff' cl=''>
								<span>
									<BsTrash />
								</span>
								Delete
							</Button>
						</Hold>
					</Td>
				</Body>
			</Buttom>
		</Container>
	);
};

export default ExpenseData;

const Container = styled.div`
	width: 100%;
	overflow-x: scroll;
	scroll-behavior: smooth;
	scroll-snap-type: x mandatory;
`;
const Image = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: gold;
	margin-right: 10px;
`;
const Button = styled.button<{ bd: string; cl: string }>`
	padding: 7px 20px;
	background-color: #ece5e5;
	border: ${({ bd }) => (bd ? "1px solid gray" : "0px")};
	border-radius: 5px;
	margin: 5px;
	color: ${({ cl }) => (cl ? "#109f10" : "red")};
	font-weight: 600;
	cursor: pointer;

	span {
		margin-left: 3px;
	}
`;
const Hold = styled.div``;
const HoldHead = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* color: #0dbb0d; */
`;
const UserHold = styled.div`
	display: flex;
	align-items: center;

	:hover {
		color: blue;
	}
	cursor: pointer;
`;
const Td = styled.td`
	padding: 10px 15px;
	font-size: 16px;
	font-weight: 400;
`;
const Th = styled.th`
	padding: 10px 10px;
	background-color: #f8f9fa;

	color: #1b2559;
	font-size: 18px;
	font-weight: 600;
	text-align: start;
	// border: 1px solid black;
`;
const Head = styled.tr`
	border-bottom: 1px solid lightgray;
`;
const Body = styled.tr`
	border-bottom: 1px solid lightgray;
	:hover {
		background-color: lightgray;
	}
`;
const Buttom = styled.table`
	width: 78rem;
	/* padding: 0px 20px; */

	text-align: center;
	border-collapse: collapse;
	border-spacing: 0;
`;
