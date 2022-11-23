import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-scroll";
interface Iprops {
	toggleSideBar: () => void;
}

const SideBarComp: React.FC<Iprops> = ({ toggleSideBar }) => {
	return (
		<SideDiv>
			<Wrapper>
				<NavHold2>
					<Head>Menu</Head>
				</NavHold2>
				<NavHold
					onClick={toggleSideBar}
					offset={-100}
					smooth={true}
					duration={500}
					to='platform'>
					<Nav>Platform</Nav>
				</NavHold>
				<NavHold
					onClick={toggleSideBar}
					offset={-100}
					smooth={true}
					duration={500}
					to='solution'>
					<Nav>Solution</Nav>
				</NavHold>

				<NavHold
					onClick={toggleSideBar}
					offset={-100}
					smooth={true}
					duration={500}
					to='customer'>
					<Nav>Customers</Nav>
				</NavHold>

				<NavHold
					onClick={toggleSideBar}
					offset={-100}
					smooth={true}
					duration={500}
					to='resource'>
					<Nav>Resources</Nav>
				</NavHold>
				<NavHold
					onClick={toggleSideBar}
					offset={-100}
					smooth={true}
					duration={500}
					to='company'>
					<Nav>Company</Nav>
				</NavHold>
				<NavHold
					onClick={toggleSideBar}
					offset={-100}
					smooth={true}
					duration={500}
					to='/'>
					<Nav>Sign In</Nav>
				</NavHold>
				<NavHold
					onClick={toggleSideBar}
					offset={-100}
					smooth={true}
					duration={500}
					to='/'>
					<Nav>
						<Button bd='none' bg='#926efc'>
							Get Started
						</Button>
					</Nav>
				</NavHold>
			</Wrapper>
		</SideDiv>
	);
};

export default SideBarComp;

const Wrapper = styled.div`
	height: 100%;
	width: 70%;
	background-color: #f3f8fe;
	top: 70px;
	bottom: 0;
	overflow: hidden;
	position: fixed;
	border-top: 1px solid silver;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	transition: all 300ms;
	padding-bottom: 20px;
	z-index: 1;
`;

const Button = styled.button<{ bg: string; bd: string }>`
	/* margin-left: 5px; */
	/* margin-right: 10px; */

	height: 40px;
	width: 90%;
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
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	top: 70px;
	bottom: 0;
	/* overflow: hidden; */
	overflow-x: hidden;
	position: fixed;
	border-top: 1px solid silver;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	transition: 0.5s;
	padding-bottom: 20px;
	z-index: 1;
	/* backdrop-filter: blur(5px); */
`;
