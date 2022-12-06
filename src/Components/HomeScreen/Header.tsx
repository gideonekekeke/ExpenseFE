import React from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import SideBarComp from "./SideBar/SideBarComp";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { user, userDecode } from "../Global/GlobalState";
import { useRecoilState, useRecoilValue } from "recoil";

const Header = () => {
	const [userData, setUserData] = useRecoilState(user);
	const [sideShow, setSideShow] = React.useState(false);
	const users = useRecoilValue(userDecode);

	const toggleSideBar = () => {
		setSideShow(!sideShow);
	};
	return (
		<Container>
			<Logo>Expense-Tracker</Logo>
			<Navigation>
				<Nav offset={-100} smooth={true} duration={500} to='platform'>
					Platform
				</Nav>
				<Nav offset={-100} smooth={true} duration={500} to='solution'>
					Solution
				</Nav>
				<Nav offset={-100} smooth={true} duration={500} to='customer'>
					Customers
				</Nav>
				<Nav offset={-100} smooth={true} duration={500} to='resource'>
					Resources
				</Nav>
				<Nav offset={-100} smooth={true} duration={500} to='company'>
					Company
				</Nav>
			</Navigation>
			<ButtonHold>
				{userData && users?.status ? (
					<Button
						bd='1px solid gray'
						bg='transparent'
						onClick={() => {
							setUserData(null);
						}}>
						Sign Out
					</Button>
				) : (
					<DivDiv>
						<NavLink
							to='/auth'
							style={{
								textDecoration: "none",
							}}>
							<Button bd='1px solid gray' bg='transparent'>
								Sign In
							</Button>
						</NavLink>

						<NavLink
							to='/auth'
							style={{
								textDecoration: "none",
							}}>
							<Button bd='' bg='#926efc'>
								Register
							</Button>
						</NavLink>
					</DivDiv>
				)}
			</ButtonHold>
			{sideShow ? (
				<Menu onClick={toggleSideBar}>
					<ImCancelCircle />
				</Menu>
			) : (
				<Menu onClick={toggleSideBar}>
					<FiMenu />
				</Menu>
			)}

			{sideShow ? <SideBarComp toggleSideBar={toggleSideBar} /> : null}
		</Container>
	);
};

export default Header;

const DivDiv = styled.div`
	display: flex;
	align-items: center;
`;

const Menu = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		display: block;
		margin-right: 30px;
		font-size: 30px;
	}
`;

const Logo = styled.div`
	font-size: 25px;
	font-weight: bold;

	@media screen and (max-width: 600px) {
		font-size: 20px;
		margin-left: 10px;
	}
`;
const Navigation = styled.div`
	display: flex;

	@media screen and (max-width: 600px) {
		margin-right: 10px;
		display: none;
	}
`;
const Nav = styled(Link)`
	margin-left: 10px;
	margin-right: 10px;
	transition: all 350ms;

	@media screen and (max-width: 960px) {
		margin-right: 10px;
		display: none;
	}

	:hover {
		color: gray;
		cursor: pointer;
	}
`;
// const Nav = styled(Link)`
// 	margin-left: 10px;
// 	margin-right: 10px;
// 	transition: all 350ms;

//   :hover {
//     color: gray;
//     cursor: pointer;
//   }
// `;
const ButtonHold = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 600px) {
		margin-right: 10px;
		display: none;
	}
`;
const Button = styled.button<{ bg: string; bd: string }>`
	margin-left: 10px;
	margin-right: 10px;

	height: 40px;
	width: 120px;
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

const Container = styled.div`
	height: 70px;
	width: 100%;
	background-color: black;
	color: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 999;
	@media screen and (max-width: 600px) {
		justify-content: space-between;
	}
`;
