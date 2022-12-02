import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import axios from "axios";
import pix from "../adds.png";
import LoadingState from "../../../LoadingScreen";
import { useNavigate } from "react-router-dom";

interface iData {
	name: string;
	email: string;
	password: string;
	confirm: string;
	userName: string;
	token: string;
}

const url = "https://event-3p90.onrender.com";
const url2 = "http://localhost:2233";

const StaffSignUp: React.FC = () => {
	const naviage = useNavigate();
	const [image, setImage] = useState<string>("");
	const [avatar, setAvatar] = useState(pix);
	const [loading, setLoading] = useState<boolean>(false);

	const yupSchema = yup.object().shape({
		name: yup.string().required("This field has to be filled"),
		token: yup.string().required("This field has to be filled"),
		userName: yup.string().required("This field has to be filled"),
		email: yup.string().required("This field has to be filled"),
		password: yup.string().required("This field has to be filled"),
		confirm: yup.string().oneOf([yup.ref("password")], null!),
	});

	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm<iData>({
		resolver: yupResolver(yupSchema),
	});

	const imageUploader = async (e: any) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(file);
		setAvatar(save);
	};

	const onSubmit: SubmitHandler<iData> = async (data) => {
		const { name, email, password, token, userName } = data;

		const formData = new FormData();

		formData.append("name", name);
		formData.append("image", image);
		formData.append("email", email);
		formData.append("password", password);
		formData.append("token", token);
		formData.append("userName", userName);
		setLoading(true);
		await axios
			.post(`${url}/api/staff/create`, formData)
			.then((res) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Your account has been created successfully",
					showConfirmButton: false,
					timer: 2500,
				}).then(() => {
					naviage("/confirmcompany");
				});
				setLoading(false);
			})
			.catch((error) => {
				Swal.fire({
					title: "Please upload your company Logo",
					text: `Please check and fix this ERROR`,
					icon: "error",
					showConfirmButton: false,
					timer: 3500,
				}).then(() => {
					setLoading(false);
				});
			});
	};

	return (
		<Container>
			{loading ? <LoadingState /> : null}
			<Wrapper>
				<InputPart>
					<IconTop>
						<NavLink
							to='/'
							style={{
								textDecoration: "none",
								color: "#000",
							}}>
							<FiArrowLeftCircle />
						</NavLink>
					</IconTop>
					<SignInputHold>
						<SignTitle>Staff Sign Up</SignTitle>
						<SignSubTitle>Register as staff to your Company</SignSubTitle>
						<InputForm onSubmit={handleSubmit(onSubmit)}>
							<ImageHolder>
								<Image src={avatar} />
								<ImageLabel htmlFor='pix'>Upload your avatar</ImageLabel>
								<ImageInput
									id='pix'
									onChange={imageUploader}
									type='file'
									accept='image/png, image/gif, image/jpeg'
								/>
							</ImageHolder>
							<br />

							<InputDiv placeholder='Company Name' {...register("name")} />
							<Error>{errors.name && "Company name is required"}</Error>

							<InputDiv placeholder='Company Token' {...register("token")} />
							<Error>{errors.token && "Company Token is required"}</Error>

							<InputDiv
								placeholder='Enter User Name'
								{...register("userName")}
							/>
							<Error>{errors.userName && "Please Enter a user Name"}</Error>

							<InputDiv placeholder='Email' {...register("email")} />
							<Error>{errors.email && "Email is required"}</Error>
							<InputDiv
								placeholder='Password'
								{...register("password")}
								type='password'
							/>
							<Error>{errors.password && "please enter your password"}</Error>
							<InputDiv
								placeholder='Confirm Password'
								{...register("confirm")}
								type='password'
							/>
							<Error>{errors.confirm && "password doesn't match"}</Error>

							<InputButton type='submit'>Sign Up</InputButton>
						</InputForm>

						<HasAcc>
							Already has an account?{" "}
							<NavLink
								to='/signinstaff'
								style={{
									textDecoration: "none",
								}}>
								<span>Sign In</span>
							</NavLink>
						</HasAcc>
					</SignInputHold>
				</InputPart>
				<ImagePart>
					<ImgMain src='/assets/up.png' alt='' />
				</ImagePart>
			</Wrapper>
		</Container>
	);
};

export default StaffSignUp;

const ImageHolder = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
const ImageLabel = styled.label`
	background-color: #926efc;
	padding: 15px 7px;
	width: 140px;
	color: white;
	border-radius: 30px;
	display: flex;
	justify-content: center;
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;
const ImageInput = styled.input`
	display: none;
`;

const Image = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	object-fit: cover;
	border: 2px solid black;
	margin-bottom: 10px;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	/* font-family: Montserrat; */
	background-color: #fff;
`;
const Wrapper = styled.div`
	width: 60%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media (max-width: 800px) {
		justify-content: center;
	}
`;
const InputPart = styled.div``;
const ImagePart = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	@media (max-width: 800px) {
		display: none;
	}
`;
// const IconTop = styled(NavLink)`
const IconTop = styled.div`
	font-size: 30px;
	text-decoration: none;
	/* color: ${(props) => props.theme.textColor}; */
`;
const SignInputHold = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
`;
const SignTitle = styled.div`
	font-size: 25px;
	font-weight: 800;
	/* color: ${(props) => props.theme.textColor}; */
`;
const SignSubTitle = styled.div`
	font-size: 12px;
	color: #77838f;
	margin-bottom: 10px;
`;
const InputForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
`;
const InputDiv = styled.input`
	height: 45px;
	width: 280px;
	margin: 4px 0;
	border: none;
	outline: none;
	border-radius: 5px;
	font-weight: 700;
	font-size: 13px;
	background-color: #c9b8fc74;
	font-family: Montserrat;
	padding-left: 20px;
	border: 2px solid #10004174;

	::placeholder {
		font-weight: 500;
		font-size: 13px;
		color: gray;
	}
`;
const InputButton = styled.button`
	height: 50px;
	width: 100%;
	border: none;
	outline: none;
	font-family: Montserrat;
	font-weight: 700;
	color: #fff;
	/* background-color: #377dff; */
	background-color: #000;
	border-radius: 3px;
	margin-top: 20px;
	transition: all 350ms;

	:hover {
		cursor: pointer;
		transform: scale(1.015);
	}
`;
const HasAcc = styled.div`
	font-size: 12px;
	font-weight: 500;
	color: ${(props) => props.theme.textColor};
	span {
		color: #926efc;
		cursor: pointer;
		font-weight: 600;
	}
`;

const ImgMain = styled.img`
	width: 350px;
	margin-top: -65px;
`;

const Error = styled.div`
	font-size: 10px;
	color: red;
`;
