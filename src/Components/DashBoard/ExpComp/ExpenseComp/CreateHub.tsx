import React, { useState } from "react";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingState from "../../../../LoadingScreen";
import { useRecoilValue } from "recoil";
import { userDecode } from "../../../Global/GlobalState";

interface Iprops {
	ToggleCreate: () => void;
}

interface iData {
	name: string;
}

const url = "https://event-3p90.onrender.com";

const CreateHub: React.FC<Iprops> = ({ ToggleCreate }) => {
	const naviage = useNavigate();
	const [loading, setLoading] = useState(false);
	const user = useRecoilValue(userDecode);
	const yupSchema = yup.object().shape({
		name: yup.string().required("This field has to be filled"),
	});

	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm<iData>({
		resolver: yupResolver(yupSchema),
	});

	const onSubmit: SubmitHandler<iData> = async (data) => {
		const newURL = `${url}/api/hub/${user._id}/create`;
		const { name } = data;

		setLoading(true);

		await axios
			.post(newURL, { name })
			.then((res) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Hub Created",
					showConfirmButton: false,
					timer: 2500,
				}).then(() => {
					naviage(-1);
				});
				setLoading(false);
			})
			.catch((error) => {
				Swal.fire({
					title: error.response.data.message,
					icon: "error",
					showConfirmButton: false,
					timer: 3500,
				}).then(() => {
					setLoading(false);
				});
			});
	};

	return (
		<>
			{loading ? <LoadingState /> : null}
			<Container>
				<Card>
					<UpHold>
						<MainHold onSubmit={handleSubmit(onSubmit)}>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									width: "100%",
									textAlign: "center",
								}}>
								<Cancel>
									<div></div>
									<ImCancelCircle onClick={ToggleCreate} />
								</Cancel>
								<h1>Create your Hub! </h1>
								<p style={{ textAlign: "center" }}>
									Please Make sure you fill in the field below
								</p>
								<Input
									placeholder='Enter name of your hub'
									{...register("name")}
								/>
								<Error>{errors.name && "Hub name is required"}</Error>
								<button>Create Now</button>
								<br />
							</div>
						</MainHold>
					</UpHold>
				</Card>
			</Container>
		</>
	);
};

export default CreateHub;

const Input = styled.input`
	font-family: Poppins;
	::placeholder {
		font-family: Poppins;
	}
`;

const Error = styled.div`
	font-size: 10px;
	color: red;
	margin-top: 5px;
`;

const Cancel = styled.div`
	font-size: 20px;
	width: 500px;
	/* background-color: red; */
	align-items: flex-end;
	display: flex;
	justify-content: space-between;
	cursor: pointer;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(8, 124, 197, 0.4);
	height: 100vh;
	position: fixed;
	width: 200vw;
	z-index: 999;
	backdrop-filter: blur(5px);
	transition: all 350ms;

	button {
		height: 30px;
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: poppins;
		background-color: #087cc5;
		border: none;
		outline: none;
		color: #fff;
		font-weight: 600;
		border-radius: 4px;
		transition: all 350ms;
		margin-top: 10px;
		cursor: pointer;
		:hover {
			transform: scale(0.94);
		}
	}
`;

const But1 = styled.div`
	height: 40px;
	width: 120px;
	background-color: #22218c;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 10px;
	cursor: pointer;
`;
const But2 = styled.div`
	height: 40px;
	/* width: 120px; */
	background-color: #22218c;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 10px;
	cursor: pointer;
	margin: 5px;
`;
const But = styled.div`
	height: 40px;
	width: 120px;
	background-color: red;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	border-radius: 10px;
	margin: 5px;
`;
const ButHold = styled.div`
	display: flex;
	// justify-content: space-between;
	margin-top: 10px;
	align-items: center;
	width: 100%;
`;

const MainHold = styled.form`
	margin-left: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	p {
		width: 250px;
		@media screen and (max-width: 790px) {
			font-size: 14px;
			width: 100%;
		}
	}
`;
const UserImage = styled.img`
	height: 150px;
	width: 150px;
	background: silver;
	border-radius: 5px;
	object-fit: cover;
	@media screen and (max-width: 790px) {
		height: 70px;
		width: 70px;
	}
`;
const UpHold = styled.div`
	display: flex;
`;

const Card = styled.div`
	width: 500px;
	background: white;
	padding: 30px;
	border-radius: 10px;
	font-family: raleway;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	input {
		width: 100%;
		height: 20px;
		padding: 10px;
		border: 1px solid lightgray;

		outline: 1px solid aliceblue;
		border-radius: 5px;
	}
	@media screen and (max-width: 790px) {
		width: 95%;
	}
`;
