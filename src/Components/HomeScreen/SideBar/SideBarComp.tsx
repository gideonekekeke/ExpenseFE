import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-scroll";

const SideBarComp = () => {
	return (
		<SideDiv>
			<NavHold2>
				<Head>Menu</Head>
			</NavHold2>
			<NavHold offset={-100} smooth={true} duration={500} to='platform'>
				<Nav>Platform</Nav>
			</NavHold>
			<NavHold offset={-100} smooth={true} duration={500} to='solution'>
				<Nav>Solution</Nav>
			</NavHold>

			<NavHold offset={-100} smooth={true} duration={500} to='customer'>
				<Nav>Customers</Nav>
			</NavHold>

			<NavHold offset={-100} smooth={true} duration={500} to='resource'>
				<Nav>Resources</Nav>
			</NavHold>
			<NavHold offset={-100} smooth={true} duration={500} to='company'>
				<Nav>Company</Nav>
			</NavHold>
			<NavHold
				offset={-100}
				smooth={true}
				duration={500}
				to='/createOrganisation'>
				<Nav>Sign In</Nav>
			</NavHold>
		</SideDiv>
	);
};

export default SideBarComp;

const NavHold = styled(Link)`
	text-decoration: none;
	color: black;
	cursor: pointer;
`;
const NavHold2 = styled.div``;
const Head = styled.div`
	border-bottom: 1px solid silver;
	padding: 14px;
	font-size: 14px;
	background-color: black;
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
	max-height: 400px;
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
