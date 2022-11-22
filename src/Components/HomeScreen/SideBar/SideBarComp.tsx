import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBarComp = () => {
	return (
		<SideDiv>
			<NavHold2>
				<Head>Menu</Head>
			</NavHold2>
			<NavHold to='/createOrganisation'>
				<Nav>View Organisation</Nav>
			</NavHold>
			<NavHold to='/register'>
				<Nav>Get Started</Nav>
			</NavHold>

			<NavHold to='/signin'>
				<Nav>Login</Nav>
			</NavHold>

			<NavHold to='/createOrganisation'>
				<Nav>Add Organisation</Nav>
			</NavHold>
		</SideDiv>
	);
};

export default SideBarComp;

const NavHold = styled(NavLink)`
	text-decoration: none;
	color: black;
`;
const NavHold2 = styled.div``;
const Head = styled.div`
	border-bottom: 1px solid silver;
	padding: 14px;
	font-size: 14px;
	background-color: #000269;
	color: white;
`;
const Nav = styled.div`
	border-bottom: 1px solid silver;
	padding: 14px;
	font-size: 14px;
	:hover {
		color: #fbaf1b;
	}
`;

const SideDiv = styled.div`
	/* position: absolute; */
	max-height: 250px;
	width: 100%;
	background-color: #f3f8fe;
	top: 70px;
	bottom: 0;
	overflow: hidden;
	position: fixed;
	border-top: 1px solid silver;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	transition: 0.5s;
	padding-bottom: 20px;
`;
