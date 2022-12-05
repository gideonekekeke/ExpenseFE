import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillGoogleCircle,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import axios from "axios";
const url = "https://event-3p90.onrender.com";

const ConfirmStaffMessage: React.FC = () => {
	const { id } = useParams();

	useEffect(() => {
		const newURL: string = `${url}/api/staff/${id}/verify`;
		axios.get(newURL);
	}, []);
	return (
		<Container>
			<Wrapper>
				<Card>
					<LogoHolder to='/'>
						<Logo>ETA</Logo>
						<LogoTitle>Expense Tracker App</LogoTitle>
					</LogoHolder>

					<Title>
						<TitleHead>Your Account has been verified</TitleHead>
						<br />
						<TitleSub>
							Your <span>Account </span>has been created successfully. <br />{" "}
							you can now
							<span> sign in </span>to your account with the link below!!!
							<br />
							<br />
							<span>
								<SpanLink to='/signinadmin'>Sign in Now </SpanLink>
							</span>
						</TitleSub>
					</Title>

					<LineHolder>
						<Line />
						<Text>OR</Text>
						<Line />
					</LineHolder>

					<Social>
						<SocialText>Stay connected with us via Social Media</SocialText>
						<Icons>
							<Icon />
							<Icon1 />
							<Icon2 />
							<Icon3 />
						</Icons>
					</Social>
				</Card>
			</Wrapper>

			<Space />
		</Container>
	);
};

export default ConfirmStaffMessage;

const SpanLink = styled(Link)`
	text-decoration: none;
`;

const Text = styled.div`
	font-size: 15px;
	padding: 0 5px;
`;

const Line = styled.div`
	border-bottom: 1px solid silver;
	width: 100%;
`;

const LineHolder = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
`;

const Icon = styled(AiFillGoogleCircle)`
	font-size: 35px;
	color: red;
	:hover {
		cursor: pointer;
	}
`;

const Icons = styled.div`
	display: flex;
	margin-top: 20px;
`;

const Icon3 = styled(AiFillLinkedin)`
	font-size: 35px;
	color: #0077b7;
	:hover {
		cursor: pointer;
	}
`;

const Icon2 = styled(AiFillTwitterSquare)`
	font-size: 35px;
	color: #50abf1;
	:hover {
		cursor: pointer;
	}
`;

const Icon1 = styled(AiFillFacebook)`
	font-size: 35px;
	color: #475993;
	:hover {
		cursor: pointer;
	}
`;

const SocialText = styled.div`
	font-size: 12px;
	display: flex;
	margin-top: 0px;
`;

const Social = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
`;

const TitleSub = styled.div`
	color: lightgray;
	font-weight: 500;
	font-size: 13px;
	span {
		color: #5833c7;
		font-weight: bold;
	}
`;

const TitleHead = styled.div`
	font-size: 22px;
	font-weight: bolder;
	color: #5833c7;
`;

const Title = styled.div`
	margin-top: 30px;
`;

const LogoTitle = styled.div`
	font-weight: 700;
	color: gray;
	width: 100px;
	line-height: 1;
	font-size: 25px;
	color: #5833c7;
`;

const Logo = styled.div`
	padding: 20px;
	background-color: #5833c7;
	color: white;
	border-radius: 3px;
	margin-right: 5px;
	font-weight: 700;
`;

const LogoHolder = styled(Link)`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`;
const Card = styled.form`
	width: 90%;
	height: 100%;
`;

const Wrapper = styled.div`
	width: 450px;
	min-height: 300px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	position: absolute;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 500px) {
		width: 90%;
		margin: 0;
		display: flex;
		justify-content: center;
	}
`;

const Right = styled.img`
	width: 200px;
	height: 300px;
	object-fit: cover;
	@media screen and (max-width: 500px) {
		display: none;
	}
`;

const Left = styled.img`
	width: 248px;
	height: 185px;
	object-fit: cover;
`;

const Holder = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-image: url("https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/pages/auth-v1-mask-light.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

const Space = styled.div`
	flex: 1;
`;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
`;
