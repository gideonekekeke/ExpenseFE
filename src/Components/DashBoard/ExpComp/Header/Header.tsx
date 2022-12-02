import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { FaCube, FaCubes } from "react-icons/fa";
import { MdDashboard, MdGroup, MdInventory, MdSettings } from "react-icons/md";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import SlideComp from "./SlideComp";
import { NavLink } from "react-router-dom";
import { user, userDecode } from "../../../Global/GlobalState";
import { useRecoilState, useRecoilValue } from "recoil";

const DashHeader = () => {
	const [userData, setUserData] = useRecoilState(user);
	const [change, setChange] = useState(false);
	const myRef = useRef<HTMLDivElement>(null!);
	const backRef = useRef<HTMLDivElement>(null!);
	const users = useRecoilValue(userDecode);

	const changeTrue = () => {
		setChange(true);
		myRef.current.style.left = "0px";
		backRef.current.style.left = "0px";
	};
	const changeFalse = () => {
		setChange(false);
		myRef.current.style.left = "-300px";
		backRef.current.style.left = "-2000px";
	};

	return (
		<div>
			<Container>
				<Wrapper>
					<Left>
						<Logo>Logo</Logo>
						<MenuHold>
							{change ? (
								<FaBars
									fontSize='20px'
									cursor='pointer'
									onClick={changeFalse}
								/>
							) : (
								<FaBars fontSize='20px' cursor='pointer' onClick={changeTrue} />
							)}
						</MenuHold>
						<Search>
							<Input placeholder='Search' />
							<Icon></Icon>
						</Search>
					</Left>
					<Right>
						<Icon8>Icon</Icon8>
						<Prof>
							<Image />
							<Ad>
								<span>Admin</span>
								<span>
									<Icon9>Icon</Icon9>
								</span>
							</Ad>
						</Prof>
					</Right>
				</Wrapper>
			</Container>
			<Side>
				<Text>Menu</Text>
				{users?.status === "admin" ? (
					<Wrap>
						<Hold to='/admin-dashboard'>
							<Icon1 />
							<Write>Dashboard</Write>
						</Hold>
						<Hold to='/admin-dashboard/staff'>
							<Icon2 />
							<Write>Staffs</Write>
						</Hold>
						<Hold to='/admin-dashboard/expense'>
							<Icon3 />
							<Write>Expenses</Write>
						</Hold>
						<Hold to='/admin-dashboard/hub'>
							<Icon4 />
							<Write>Hubs</Write>
						</Hold>

						<Hold
							onClick={() => {
								setUserData(null);
							}}
							to='/'>
							<Icon7 />
							<Write>LogOut</Write>
						</Hold>
					</Wrap>
				) : (
					<>
						{users?.status === "staff" ? (
							<Wrap2>
								<Hold to='/staff-board'>
									<Icon1 />
									<Write>Dashboard</Write>
								</Hold>
								<Hold to='/staff-board/invoice'>
									<Icon6 />
									<Write>Invoices</Write>
								</Hold>
								<Hold
									onClick={() => {
										setUserData(null);
									}}
									to='/'>
									<Icon7 />
									<Write>LogOut</Write>
								</Hold>
							</Wrap2>
						) : null}
					</>
				)}
			</Side>
			<Back ref={backRef}>
				<SideHold ref={myRef}>
					<SlideComp changeFalse={changeFalse} />
				</SideHold>
			</Back>
		</div>
	);
};

export default DashHeader;

const Ad = styled.div`
	margin-left: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	/* background-color: blue; */

	span {
		font-weight: 700;
	}
`;
const Image = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: gold;
`;
const Prof = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
`;
const Icon9 = styled(BiChevronDown)`
	font-weight: 500;
`;
const Icon8 = styled(MdOutlineNotifications)`
	font-size: 20px;
`;
const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Input = styled.input`
	border: 0px;
	outline: none;
`;
const Icon = styled(BiSearch)`
	cursor: pointer;
`;
const Search = styled.div`
	width: 200px;
	padding: 0px 3px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border: 1px solid lightgray;
	border-radius: 5px;

	span {
		color: #908f8f;
	}
`;
const Logo = styled.div`
	margin-right: 20px;
	font-size: 20px;
	font-weight: 800;
`;
const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* width: 300px; */
`;
const MenuHold = styled.div`
	display: none;

	@media (max-width: 1000px) {
		display: block;
	}
`;
const Back = styled.div`
	display: none;

	@media (max-width: 1000px) {
		height: 100vh;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		position: fixed;
		transition: 1ms;
		left: -2000px;
		display: block;
		z-index: 1111;
	}
`;
const SideHold = styled.div`
	display: none;

	@media (max-width: 1000px) {
		width: 260px;
		display: block;

		height: 88%;
		transition: all 350ms;
		/* display: flex; */
		background-color: white;
		border-top-right-radius: 30px;
		position: fixed;
		top: 88px;
		left: -300px;
	}
`;
const Write = styled.div`
	font-weight: bold;
	font-size: 18px;
	color: #aaa;
	margin-left: 7px;
	font-size: 13px;
	cursor: pointer;

	:active {
		color: #7638ff;
	}
`;
const Icon1 = styled(MdDashboard)`
	margin-left: 20px;
	color: #aaa;
	font-size: 18px;

	:active {
		color: #7638ff;
	}
`;
const Icon2 = styled(MdGroup)`
	margin-left: 20px;
	color: #aaa;
	font-size: 18px;

	:active {
		color: #7638ff;
	}
`;
const Icon3 = styled(FaCube)`
	margin-left: 20px;
	color: #aaa;
	font-size: 18px;

	:active {
		color: #7638ff;
	}
`;
const Icon4 = styled(FaCubes)`
	margin-left: 20px;
	color: #aaa;
	font-size: 18px;

	:active {
		color: #7638ff;
	}
`;
const Icon6 = styled(MdInventory)`
	margin-left: 20px;
	color: #aaa;
	font-size: 18px;

	:active {
		color: #7638ff;
	}
`;
const Icon7 = styled(MdSettings)`
	margin-left: 20px;
	color: #aaa;
	font-size: 18px;

	:active {
		color: #7638ff;
	}
`;
const Container = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	position: fixed;
	z-index: 11111;
`;
const Wrapper = styled.div`
	width: 90%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
// const Wrap = styled.div``
const Side = styled.div`
	width: 230px;
	height: 88%;
	overflow: hidden;
	/* display: flex; */
	background-color: white;
	border-top-right-radius: 30px;
	position: fixed;
	top: 88px;
	z-index: 1;
	@media (max-width: 1000px) {
		display: none;
		/* left: -300px; */
	}

	//box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	//box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	//box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;
const Wrap = styled.div`
	/* width: 90%; */
	height: 40%;
	margin-top: 23px;
	/* padding-left: 15px; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	// background-color: red;
`;
const Wrap2 = styled.div`
	/* width: 90%; */
	height: 30%;
	margin-top: 23px;
	/* padding-left: 15px; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	// background-color: red;
`;
const Text = styled.div`
	padding-left: 15px;
	font-weight: bold;
	color: #aaa;
	font-size: 13px;
	margin-top: 20px;
`;
const Hold = styled(NavLink)`
	width: 100%;
	display: flex;
	align-items: center;
	/* height: 100px; */
	padding: 10px 0px;
	cursor: pointer;
	text-decoration: none;

	:active {
		border-left: 5px solid #7638ff;
		background-color: #f8f5ff;
		color: #7638ff;
	}

	:focus {
		border-left: 5px solid #7638ff;
		background-color: #f8f5ff;
		color: #7638ff;
	}
`;
