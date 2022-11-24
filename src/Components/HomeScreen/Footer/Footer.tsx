import React from "react";
import styled from "styled-components";

import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer: React.FC = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<FirstDiv>
						<Logo>Expense-Tracker</Logo>
						<p>
							The one-stop platform for all <br />
							financial management of small and <br />
							medium-sized businesses
						</p>
						<Socials>
							<BsFacebook />
							<AiFillInstagram />
							<BsLinkedin />
							<BsYoutube />
							<BsTwitter />
						</Socials>
					</FirstDiv>
					<SecondDiv>
						<Box>
							<Title>Platforn</Title>
							<Nav>Why expense-tracker</Nav>
							<Nav>Espense Management</Nav>
							<Nav>Automated Bookkeeping</Nav>
							<Nav>Integration</Nav>
						</Box>
						<Box>
							<Title>Solutions</Title>
							<Nav>Self-employed</Nav>
							<Nav> Small Business</Nav>
							<Nav>SMEs and Startups</Nav>
						</Box>
						<Box>
							<Title>Resources</Title>
							<Nav>Blog</Nav>
							<Nav>Webinars & Ebooks</Nav>
							<Nav>FAQ</Nav>
							<Nav>Help Center</Nav>
						</Box>
						<Box>
							<Title>Company</Title>
							<Nav>About us</Nav>
							<Nav>Customers</Nav>
							<Nav>Careers</Nav>
							<Nav>Contact Us</Nav>
						</Box>
					</SecondDiv>
				</Wrapper>
				<CopyT>
					<span>© 2022 expense. All right reserved.</span>
				</CopyT>
			</Container>
		</div>
	);
};

export default Footer;

const CopyT = styled.div`
	text-align: center;
	color: #1e2027;
	font-size: 0.875rem;
	line-height: 1.25rem;
	opacity: 0.8;
`;
const Box = styled.div``;
const Title = styled.div`
	margin: 0;
	margin-bottom: 1.75rem;
	line-height: 1.25rem;
	font-weight: 700;
	font-size: 0.9375rem;
	color: #1e2027;
`;
const Nav = styled.p`
	color: #565656;
	transition: all ease-in 0.2s;
	padding-bottom: 10px;
	font-size: 0.875rem;
	line-height: 1.25rem;
	margin-left: 3px;
	:hover {
		cursor: pointer;
		color: #ffda0a;
		font-weight: 600;
	}
`;

const Logo = styled.div`
	font-weight: bold;
`;
const Socials = styled.div`
	width: 170px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #926efc;
	font-size: 1.3rem;
	margin-top: 30px;
`;
const FirstDiv = styled.div`
	width: 350px;
	/* height: 200px; */
	margin-top: 40px;
	p {
		color: #1e2027;
		margin-top: 30px;
		font-size: 0.9375rem;
		line-height: 1.5rem;
	}
`;
const SecondDiv = styled.div`
	width: 70%;
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;

	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	padding: 30px;
	width: 91%;
	flex-wrap: wrap;
`;
const Container = styled.div`
	/* height: 60vh; */
	width: 100%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-bottom: 50px;
	padding-top: 50px;
`;
